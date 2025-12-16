export default function FooterWithNewsletter() {
  return (
    <footer className="w-full bg-slate-100">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Logo Card */}
          <div className="bg-white rounded-2xl p-10 flex items-center justify-center shadow-sm">
            <img src="logo.png" alt="" />
          </div>

          {/* Newsletter Card */}
          <div className="lg:col-span-2 rounded-2xl p-10 bg-gradient-to-r from-indigo-600 to-sky-300 text-white">
            <h3 className="text-3xl font-semibold mb-6">
              Join Krypo Newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded-lg text-black outline-none"
              />
              <button className="px-8 py-3 rounded-lg bg-black text-white hover:bg-black/90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Say hello.</h4>
            <p className="text-sm text-muted-foreground mb-2">example@krypo.com</p>
            <p className="text-sm text-muted-foreground mb-2">+0 (800) 705-8494</p>
            <p className="text-sm text-muted-foreground">
              Riverside Building, London SE1 7PB, United Kingdom
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Faq</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Services</li>
              <li>Listing</li>
              <li>Pricing Plan</li>
              <li>Team</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Wallet</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>
            © Krypo. All Rights Reserved By <span className="text-indigo-600">EnvyTheme</span>
          </p>
          <button className="hover:text-black">Back To Top</button>
        </div>
      </div>
    </footer>
  );
}
