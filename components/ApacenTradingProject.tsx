import { Button } from "@/components/ui/button"

export default function ApacenTradingProject() {
  return (
    <section
      id="ApacenTrading"
      className="document-section border-t border-black"
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">
          Apacen Trading
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: description + links */}
          <div className="md:w-1/2 space-y-4 text-sm leading-relaxed">
            <p>
              Apacen Trading is a Polymarket data and strategy platform I built
              in the fall of 2025. It ingests live quotes and trades from
              Polymarket, writes them into hourly-partitioned PostgreSQL tables,
              computes rolling features, and exposes the results via a typed Go
              API and a Next.js dashboard.
            </p>
            <p>
              The system is designed to behave like a small trading backend:
              high write volume, COPY-based batch persistence, archiving old
              partitions to object storage, and a paper-trading layer for
              experimenting with strategies that can lose (or make) millions in
              backtests without touching real money.
            </p>
            <p>
              The public dashboard surfaces ingest rates, lag across data
              streams, microstructure-based price jumps, and paper strategy
              P&amp;L, along with an FAQ explaining why the prices it shows can
              differ from the Polymarket UI. The diagram on the right shows how
              data flows through the system.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://apacen-trading.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="mono-button">
                  See Dashboard
                </Button>
              </a>
              <a
                href="https://github.com/OldEphraim/polymarket-go-connection"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="mono-button">
                  See GitHub
                </Button>
              </a>
              <a
                href="https://oldephraim.substack.com/p/apacen-trading-introduction-and-data"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="mono-button">
                  Read Deep-Dive
                </Button>
              </a>
            </div>
          </div>

          {/* Right: black & white dataflow diagram */}
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-sm border border-black p-4 text-[0.75rem] uppercase tracking-tight">
              <div className="border-b border-black pb-2 mb-3 font-mono">
                <div className="font-semibold">Apacen Trading</div>
                <div className="text-[0.6rem] text-gray-700">
                  How does data flow through the system?
                </div>
              </div>

              {/* Vertical pipeline */}
              <div className="space-y-3">
                <PipelineBox
                  title="Websocket Ingest"
                  subtitle="Quotes & trades from Polymarket in real time"
                />
                <ArrowDown />
                <PipelineBox
                  title="Feature Engine"
                  subtitle="Computes short-horizon returns & volatility"
                />
                <ArrowDown />
                <PipelineBox
                  title="Persister"
                  subtitle="Batches data into Postgres via COPY"
                />
                <ArrowDown />
                <PipelineBox
                  title="Database"
                  subtitle="Stores recent market microstructure history"
                />
              </div>

              {/* Fan-out from DB: three arrows down */}
              <div className="mt-2 pt-2">
                <div className="flex justify-between gap-3">
                  <FanoutColumn
                    title="Archiver / Janitor"
                    subtitle="Archives old partitions to S3 & cleans up"
                  />
                  <FanoutColumn
                    title="Strategies"
                    subtitle="Runs paper trades & tracks P&amp;L"
                  />
                  <FanoutColumn
                    title="Dashboard"
                    subtitle="Shows ingest, lag, events & stats"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Small helper components to keep JSX tidy */

function PipelineBox(props: { title: string; subtitle: string }) {
  return (
    <div className="border border-black px-3 py-2">
      <div className="font-mono text-[0.7rem]">{props.title}</div>
      <div className="text-[0.65rem] normal-case mt-1">
        {props.subtitle}
      </div>
    </div>
  )
}

function ArrowDown() {
  return (
    <div className="flex justify-center">
      <span className="text-[0.8rem] leading-none">↓</span>
    </div>
  )
}

function FanoutBox(props: { title: string; subtitle: string }) {
  return (
    <div className="border border-black px-2 py-2 h-full">
      <div className="font-mono text-[0.7rem]">{props.title}</div>
      <div className="text-[0.6rem] normal-case mt-1">
        {props.subtitle}
      </div>
    </div>
  )
}

function FanoutColumn(props: { title: string; subtitle: string }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-3 mt-1">
      {/* Arrow sits a bit higher, with extra gap before the box */}
      <span className="text-[0.8rem] leading-none">↓</span>
      <FanoutBox title={props.title} subtitle={props.subtitle} />
    </div>
  )
}
