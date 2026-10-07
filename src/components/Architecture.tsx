export function Architecture() {
  const modules = [
    {
      id: "01",
      name: ":core:ui",
      stack: "Jetpack Compose + Material 3",
      description: "Fully declarative UI layer. Dynamic theming, AMOLED pure black baseline, and smooth responsive layouts without legacy XML overhead."
    },
    {
      id: "02",
      name: ":core:data",
      stack: "Room Database + Kotlin Coroutines",
      description: "Local persistence for offline caching, playlist management, and play history. Zero external analytics or tracking."
    },
    {
      id: "03",
      name: ":core:innertube",
      stack: "Ktor + Custom Scraper",
      description: "Direct API communication for catalog search and metadata retrieval, circumventing intermediate proxy servers."
    },
    {
      id: "04",
      name: ":providers",
      stack: "Media3 ExoPlayer",
      description: "Robust playback engine supporting background foreground services, gapless playback, and up to 24-bit FLAC audio pipelines."
    }
  ];

  return (
    <section id="architecture" className="relative w-full border-t border-zinc-900 bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-zinc-100 tracking-tight mb-4">Architecture Specification</h2>
          <p className="text-zinc-400 max-w-2xl leading-relaxed text-sm">
            RahiTunes is strictly modularized to enforce separation of concerns, ensuring high performance audio playback without polluting the UI thread.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-zinc-900 text-xs font-mono text-zinc-500 uppercase tracking-widest">
                <th className="pb-4 font-medium w-16">ID</th>
                <th className="pb-4 font-medium w-48">Module</th>
                <th className="pb-4 font-medium w-64">Stack</th>
                <th className="pb-4 font-medium">Implementation Details</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {modules.map((mod) => (
                <tr key={mod.id} className="border-b border-zinc-900/50 hover:bg-zinc-900/20 transition-colors">
                  <td className="py-6 font-mono text-zinc-500">{mod.id}</td>
                  <td className="py-6 font-mono text-zinc-300">{mod.name}</td>
                  <td className="py-6 font-semibold text-zinc-200">{mod.stack}</td>
                  <td className="py-6 text-zinc-400 leading-relaxed">{mod.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
