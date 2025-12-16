import Navbar from "./NavBar";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/hero.mp4"
      />
      <Navbar />
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/70" />

      {/* Main Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
            Building Trust, <br />
            One Block at a <br />
            Time
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Empowering Transparency, Security, and Innovation
          </p>

          <div className="mt-8 flex items-center gap-6">
            <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Contact Us
            </button>

            <button className="flex items-center gap-3 text-gray-800 font-medium">
              <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                ▶
              </span>
              Watch Our Journey
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8  max-w-md">
        <div className="bg-black/50 backdrop-blur-xl text-white p-6 rounded-2xl border border-white/20">
          <p className="text-sm leading-relaxed">
            Discover the power of blockchain technology to revolutionize your
            industry. Our platform offers secure, transparent, and efficient
            solutions tailored to your business needs. Join us in shaping the
            future of innovation and growth.
          </p>
        </div>
      </div>
    </section>
  );
}
