export const metadata = {
    title: "Blog | Alan Garber",
  }
  
  export default function BlogIndex() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
  
        <section className="space-y-2">
          <h2 className="text-sm text-gray-500">November 10, 2025</h2>
          <ul className="list-disc ml-5">
            <li>
              <a href="/blog/apacen-trading" className="underline">
                Data Plane for Apacen Trading
              </a>
            </li>
          </ul>
        </section>
      </main>
    )
  }
  