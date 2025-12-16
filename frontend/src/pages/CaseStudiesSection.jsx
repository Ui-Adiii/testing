export default function CaseStudiesSection() {
  const studies = [
    {
      title: "Digital Identity Management",
      desc: "Securing Personal Data with Blockchain",
    },
    {
      title: "Supply Chain Traceability",
      desc: "Enhancing Transparency and Accountability",
    },
    {
      title: "Real Estate Tokenization",
      desc: "Fractional Ownership and Investment Opportunities",
    },
    {
      title: "Healthcare Records Management",
      desc: "Ensuring Privacy and Interoperability",
    },
  ];

  return (
    <section className="w-full py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-black text-white overflow-hidden">
          {/* Background image */}
          <img
            src="/case-bg.png"
            alt="case studies background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 p-12">
            {/* Left */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-semibold mb-6">Case Studies</h2>
                <p className="text-sm text-gray-300 max-w-md leading-relaxed">
                  Case studies offer valuable insights into real-world
                  applications of blockchain technology, showcasing its
                  potential to address various challenges and drive innovation
                  across industries.
                </p>
              </div>

              
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center">
              {studies.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-6 border-b border-white/20 last:border-none"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>

                  <button className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition">
                    →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
