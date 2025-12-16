const stats = [
  { value: "15+", label: "Years on the market." },
  { value: "1K+", label: "IT professionals." },
  { value: "98%", label: "Returning customers" },
  { value: "110+", label: "Partners worldwide" },
];

export default function StatsSection() {
  return (
    <section className="relative w-full py-24 bg-slate-100 overflow-hidden">
      {/* Gradient blobs */}
    
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-3">
              <h3 className="text-4xl md:text-5xl font-bold text-blue-600">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
