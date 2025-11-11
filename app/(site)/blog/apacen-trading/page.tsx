export const metadata = {
  title: "0. Apacen Trading | Alan Garber",
  description:
    "Notes on building a high-ingest Polymarket data plane: gatherer, archiver, healthmonitor, and more.",
}

export default function ApacenTradingPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <a href="/blog" className="no-underline text-sm underline-offset-2 hover:underline">
        ← Back to Blog
      </a>

      <h1 className="text-3xl font-bold mt-4">0. Apacen Trading</h1>
      <p className="text-sm text-gray-500 mt-1">Published November 10, 2025</p>

      {/* Vertical rhythm + readable line-height */}
      <div className="space-y-6 leading-7">
        <p>
          Polymarket is a prediction market built on the Polygon blockchain. At time of writing, it has been reported by
          Forbes to be the world’s busiest prediction market, handling hundreds of millions of dollars in volume monthly.
          At the same time, it has numerous inefficiencies, with investors betting that Jesus will return (since, after
          all, the price of shares on Jesus returning in 2025 rising from 1¢ to 3¢ represents an enormous return on
          investment!), or the price of “yes” being systematically overvalued across the board.
        </p>

        <p>
          Investing in prediction markets theoretically has certain strong advantages over investing in more traditional
          stock markets or cryptocurrency markets. While these are strongly intercorrelated, with most stocks and
          cryptocurrencies moving in tandem with the overall economy, resulting in boom-and-bust cycles, prediction
          markets are free of these effects. While the amount of liquidity might decline in a bad economy, capping
          potential profits, the horrific busts experienced by cryptocurrency traders are unlikely to be replicated.
        </p>

        <p>
          At the moment, although Polymarket is based in the US, US citizens are not permitted to buy and sell shares on
          the platform. However, due to recent CFTC decisions, this seems very likely to change before the end of the year
          (97% chance before the end of the year, according to Polymarket itself), with the President’s son investing in
          the business.
        </p>

        <p>
          <strong>Apacen Trading</strong> (from the Quenya word <em>apacen</em>, meaning ‘foresight’) is my project to learn about
          how the market works, and hopefully eventually profit. At time of writing, it is a service written mostly in Go
          running in EC2 which collects order-book data from Polymarket and stores it in a Postgres database — revealing,
          in theory, whether pursuing particular strategies would be profitable or not. This project is still in its early
          days (with the strategies which are currently running existing mostly to test different parts of the codebase,
          rather than to actually make money). However, the journey of a thousand miles begins with a single step. This
          post details the challenges I encountered in trying to build Apacen Trading, and how I built the backend to
          respond to those challenges.
        </p>

        <h2 className="text-2xl font-semibold mt-12">1. Gatherer</h2>

        <p>
          The heart of the project is the gatherer, an engine which gathers all of the information that we might need to
          make good strategies and stores it in our Postgres database. The gatherer connects to Polymarket’s websocket
          feed, listens to every trade and every quote, and converts them into rows for three main tables:
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li><code>market_quotes</code> — the top of the order book</li>
          <li><code>market_trades</code> — individual fills</li>
          <li><code>market_features</code> — statistical signals derived from quotes and trades</li>
        </ul>

        <p>
          This is a vast amount of information. Over the past hour (writing at 5:10 PM on November 10, 2025), the system
          has emitted 4,220,462 quotes (taking up 761 MB in my database); 1,034,740 features (443 MB); and 15,565 trades
          (3.5 MB). When there are spikes in activity on Polymarket — for example, during election nights in different
          countries, or during particular sporting events — these numbers are perfectly capable of doubling or tripling.
        </p>

        <p>
          I have never had this much information before, and figuring out how to handle it (where do I put it? how do I
          put it there?) was not a trivial task. Whenever you issue an INSERT, Postgres does not actually insert
          immediately. It first writes a change to memory (creating a “dirty page”); then it writes to the WAL (the
          ‘Write-Ahead Log’); then it writes to the OS cache; then <code>fsync()</code> ensures that the cache is flushed to the disk
          (this is the step at which the transaction is durable, since the update can be reconstructed from the WAL); the
          actual write might not happen until much later. By contrast, in a checkpoint, everything from the WAL is flushed
          to the disk. This process is good for reliability, but it introduces several potential bottlenecks: WAL itself
          might grow and take up so much space that your system runs out of disk; if you have many inserts,
          <code>fsync()</code> calls might interfere with each other, causing Postgres to stall while WAL is flushed to disk; and long
          checkpoints can cause “write storms”, where the disk stalls because of attempts to flush gigabytes of data to it
          (or crashes entirely if multiple writers attempt to access resources simultaneously).
        </p>

        <p>
          Solving these problems required building a batching and staging pipeline, made up of a feature engine and a
          persister. The feature engine is the first to look at content taken in from the websocket. It keeps enough
          recent history in memory to compute rolling signals, and emits a new feature when something interesting happens.
          (It also enforces hard caps on per-token buffers to keep memory from ballooning during news spikes). Then, it
          passes all information to the persister, which needs to actually…persist our information.
        </p>

        <p>
          The persister batches quotes, trades, and features in RAM, and then flushes them to the database at predictable
          intervals (or when a queue fills; this allows us to avoid ever dropping features, quotes, or trades). It uses
          COPY for each stream, which is Postgres’s fastest ingest path, for each stream, avoiding the pattern where each
          row gets its own <code>fsync()</code> call. This doesn’t quite work for <code>market_features</code>, though; quotes and trades are
          event logs, but features, which are derived, may change as the window slides (eg, Sigma5m, which is a measure of
          volatility, is constantly recalculated as quotes or trades roll in). For this reason, <code>market_features</code> are first
          COPY-ed into temporary tables, and then those tables are UPSERTed in one set-based merge into
          <code>market_features</code> — causing only the last <code>market_feature</code> to actually be saved.
        </p>

        <h2 className="text-2xl font-semibold mt-12">2. Archiver, Healthmonitor, and Janitor</h2>

        <p>
          Of course, that’s actually not enough. We have a limited amount of space on the disk (I started with 20GB of
          free space on my t3.small EC2 instance on AWS; I eventually gave in and paid for 100GB, in a moment of
          weakness), and we would quickly run out of space if 1–3 GB were allowed to flow into the database in perpetuity.
          The data needs to be kept somewhere else. In itself, this is not the hard part, precisely — the purpose of the
          archiver is to scan old data, export it to an S3 bucket as compressed JSON, and then mark that data as archived.
          But then it needs to be deleted.
        </p>

        <p>
          Simply running a <code>DELETE</code> command doesn’t work; that just marks the row deleted, creating what is known as a ‘dead
          tuple’. Running a <code>VACUUM</code> command is better — this marks the rows as deleted and reusable — but it still does not
          actually shrink disk size. What you need for that is to run <code>VACUUM FULL</code> — but that, unfortunately, is blocking; no
          writing is possible during a <code>VACUUM FULL</code>. In a system like Apacen where information is constantly being received,
          that doesn’t work at all.
        </p>

        <p>
          The solution was to partition the tables: instead of just having one <code>market_features</code>, <code>market_quotes</code>, or
          <code>market_trades</code> table, a new one with a timestamp is created every hour. Partitioning transforms cleanup from a
          row-level operation to a metadata operation — instead of deleting millions of rows, a partition can be dropped
          in O(1) time, quickly freeing space and avoiding table-wide locks. After each table is filled up, the system
          moves on to filling the next table, and after a table is archived, the janitor can simply <code>DROP TABLE</code>, destroying
          it entirely and freeing up space for the rest of the system. (The janitor is set to a default of keeping quotes
          for 2.4 hours, even if they have been archived; trades for 3.6 hours; and features for 6 hours. These are very
          conservative numbers, originally meant to be appropriate for a system which had only 20GB of disk space; when
          strategies are built in greater detail, I will consider raising them).
        </p>

        <p>
          The activities of the archiver and janitor are regulated by the healthmonitor. At periodic intervals, the
          healthmonitor checks disk utilization, WAL volume, and archiver backlog. It can decrease the archiver’s page
          size and trigger the janitor more frequently if disk use rises; by contrast it can also increase the archiver’s
          page size if there is a large backlog; and it can prompt Postgres to checkpoint more frequently if WAL size
          seems to be growing. (After &gt;30 minutes of healthy behavior, it returns all of these services to “factory”
          settings). The healthmonitor enables the system to dynamically respond to problems that might arise rather than
          crashing.
        </p>

        <h2 className="text-2xl font-semibold mt-12">3. Lessons Learned and Problems Encountered</h2>

        <p>
          This project required me to learn more about how databases actually work than I had ever learned in the past.
          Although I’m not certain Postgres was the correct choice here (with TimescaleDB being perhaps more appropriate
          for vast amounts of timestamped data, and Kafka also existing as a refinement which could be implemented down
          the road), choosing Postgres forced me to learn about the existence of the WAL, the necessity of balancing
          checkpoint timing in such a way that WAL is kept low but write storms are avoided, and what exactly happens when
          you try to delete information from Postgres (or add information to it). These insights are difficult to
          encounter until you have worked on a write-heavy system.
        </p>

        <p>
          Although I’ve worked with Go before, in this project for the first time I had to resort to using pprof, which
          shows you exactly what function calls are taking up space in your heap. Some functions use much more memory than
          others, and it was only by using tools which showed me what was being stored in the heap that I was able to
          debug my project. Often, the actual fixes required were quite simple — the amount of memory used by some
          functions fell off a cliff when <code>map&lt;string, any&gt;</code> was replaced with a typed struct — but these problems are
          invisible to any coder until they are working on a system where a service running out of memory is a real
          concern. (And profiling revealed more than just memory problems — it also revealed how queues became backed up
          during spikes, and where goroutines were blocking).
        </p>

        <p>
          Systems like these fail not because of bugs which are apparent when the system boots, but because of small
          problems which compound over time — because of a failure to take into account that WAL is growing faster than
          checkpoints happen, because of a failure to build a queue which can handle a news spike, or because of a
          background job that runs slightly too slowly.
        </p>

        <h2 className="text-2xl font-semibold mt-12">4. The Path From Here</h2>

        <p>
          There are still a few elements that the data plane (by which I refer to the
          gatherer/database/archiver/janitor/healthmonitor as a single unit) needs for full functionality — among other
          things, the gatherer (and the rest of the system) still has no way of telling when a market ends. (Unlike in a
          classical stock market, in a prediction market the value of all tokens eventually resolves to either 0 or 1).
          But for the most part it is done; in particular, the essential element of taking in vast amounts of data,
          reading it, and then archiving it is accomplished. All of the value of the project is downstream from this.
        </p>

        <p>
          Work has begun on a “strategies” microservice and an “api” microservice. The former does paper trading (so far
          on extremely basic strategies), to test how well they work in theory; the latter reads from the Postgres
          database, so that the frontend (currently under construction) can display some basic aspects of the system.
        </p>

        <p>
          Ideally, the plan is to come up with many strategies, and test them over long periods of time. (Most likely this
          will initially require taking in the literature on strategies in orderbook markets; a more mature version of the
          frontend will include ‘calculators’ for various mathematical constructs that are used to determine betting
          strategies. Just as I had to learn about databases to build a write-heavy system, I anticipate needing to
          refamiliarize myself with calculus and statistics, and perhaps learn new mathematical concepts, to execute this
          stage of the project successfully). Once Polymarket is permitted for US use, we could hook some of these up to
          the actual markets, and observe how they work under those conditions. At this point, I can imagine three
          separate directions, not at all mutually exclusive, in which this project could go: I could directly make money
          myself from trading, if I can come up with good strategies; I could allow third parties to pay for access to
          archived information that I’ve been storing in S3; or, if my strategies are successful enough, I could allow
          others to “subscribe” by investing in those strategies, and take a cut of the profits myself for simplifying
          access to a complicated trading strategy. My guess is that the last of these would be the most lucrative, but
          there is still a lot to be learned, and a lot to be built, before that can be implemented.
        </p>
      </div>
    </main>
  )
}
