export default function BlockchainServicesClean() {
  const services = [
    {
      title: "Blockchain Consulting",
      desc: "Tailored blockchain consulting to help businesses adopt and implement blockchain technology with confidence.",
      image: "/consulting.jpg",
    },
    {
      title: "Wallet Services",
      desc: "Secure and scalable wallet solutions designed for modern decentralized applications.",
      image: "/wallet.jpg",
    },
    {
      title: "Integration Services",
      desc: "Seamless blockchain integration connecting your existing systems with decentralized networks.",
      image: "/integration.jpg",
    },
  ];

  return (
    <section className="w-full py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Our Blockchain Services
          </h2>
          <p className="text-muted-foreground max-w-xl">
            We provide comprehensive blockchain development services, offering
            expertise across consulting, wallets, and system integrations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-52 w-full object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
