export default function CommunityContactSection() {
  const socials = [
    "Telegram",
    "Twitter",
    "Medium",
    "Instagram",
    "YouTube",
    "Discord",
    "Facebook",
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-black via-slate-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Community */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-14">
          Our Community
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {socials.map((item) => (
            <span
              key={item}
              className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Type your name*"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-indigo-400"
              />
              <input
                type="email"
                placeholder="Type your email*"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-indigo-400"
              />
              <input
                type="tel"
                placeholder="Type your number*"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-indigo-400"
              />
              <textarea
                rows={4}
                placeholder="Type your message"
                className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-indigo-400"
              />

              <label className="flex items-center gap-2 text-sm text-white/70">
                <input type="checkbox" /> I agree with this.
              </label>

              <button className="mt-4 px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-sm font-medium">
                Send Message
              </button>
            </form>
          </div>

          {/* Steps */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              What happens next depends on what you're looking to do!
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                  01
                </span>
                <p className="text-sm text-white/80">
                  <strong>Research:</strong> Dive deeper into the topic to gather
                  more information and insights.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                  02
                </span>
                <p className="text-sm text-white/80">
                  <strong>Planning:</strong> Develop a strategy or outline to
                  organize your thoughts and actions.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                  03
                </span>
                <p className="text-sm text-white/80">
                  <strong>Execution:</strong> Take action based on your research
                  and planning to move forward with your project or task.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}