export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Finance and Banking",
      desc: "Our solutions cater to the finance and banking sector by providing blockchain-based platforms for secure and efficient transactions, smart contract automation, and decentralized financial services such as lending, borrowing, and asset management.",
      image: "/finance.png",
      large: true,
    },
    {
      title: "Healthcare",
      desc: "Blockchain transforming healthcare with secure medical management.",
      image: "/healthcare.png",
    },
    {
      title: "Real Estate",
      desc: "Real estate transactions made secure with blockchain solutions.",
      image: "/realestate.png",
    },
    {
      title: "Supply Chain and Logistics",
      desc: "Our blockchain solutions streamline supply chain and logistics operations, ensuring transparency and efficiency from production to delivery.",
      image: "/supplychain.png",
      highlight: true,
    },
  ];

  return (
    <section className="w-full py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-16">
          Industries We Serve
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left big card */}
          <div className="lg:col-span-2">
            <div className="relative h-full bg-black rounded-2xl overflow-hidden">
              <img
                src={industries[0].image}
                alt={industries[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="relative z-10 p-8 text-white max-w-xl">
                <h3 className="text-2xl font-semibold mb-4">
                  {industries[0].title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {industries[0].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <img
                src={industries[1].image}
                alt={industries[1].title}
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                {industries[1].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industries[1].desc}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <img
                src={industries[2].image}
                alt={industries[2].title}
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                {industries[2].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industries[2].desc}
              </p>
            </div>
          </div>

          {/* Bottom wide card */}
          <div className="lg:col-span-3">
            <div className="relative bg-indigo-200/70 rounded-2xl p-8 overflow-hidden">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold mb-4">
                  {industries[3].title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industries[3].desc}
                </p>
              </div>
              <img
                src={industries[3].image}
                alt={industries[3].title}
                className="absolute right-6 bottom-6 h-40 hidden md:block"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="w-full rounded-xl border py-4 text-sm font-medium hover:bg-black hover:text-white transition">
            Join our community today to start your Blockchain journey!
          </button>
        </div>
      </div>
    </section>
  );
}
