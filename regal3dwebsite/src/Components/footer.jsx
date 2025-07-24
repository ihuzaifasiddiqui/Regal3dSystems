export default function Footer() {
  return (
    <footer className="bg-[#242834] text-white py-10 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-3 tracking-wide">Contact</h3>
          <p className="font-light text-sm pb-2 tracking-wider">
            16-8-2/A/1, New Malakpet
          </p>
          <p className="font-light text-sm pb-2 tracking-wider">
            Hyderabad, Telangana 500024
          </p>
          <p className="font-light text-sm pb-2 tracking-wider">
            info@regal3dsystems.in
          </p>
          <p className="font-light text-sm pb-2 tracking-wider">
            8885311867 | 9700079268
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full">
            Get a Quote
          </button>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Stay Ahead in 3D Printing</h3>
          <p className="text-gray-400 text-sm">
            Get updates on new products, expert tips, and exclusive offers—straight to your inbox.{" "}
          </p>
          <div className="mt-4">
            <label className="block mb-2">Email *</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md border border-gray-500 bg-gray-800"
              placeholder="Enter your email"
            />
            <div className="flex items-center mt-3">
              <input type="checkbox" className="mr-2" />
              <label>Yes, subscribe me to your newsletter.</label>
            </div>
            <button className="mt-4 bg-white text-gray-900 px-5 py-2 rounded-full">
              Submit
            </button>
          </div>
        </div>

        {/* Menu Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            {/* <li><a href="/materials" className="hover:underline">Materials</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li> */}
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Follow us on</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.instagram.com/regal3dsystems"
                target="_blank"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61560974176982"
                target="_blank"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/regal3dsystems/"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Regal3DSystems"
                target="_blank"
                className="hover:underline"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
        <div className="text-left text-sm text-gray-500">
          © 2025 Regal 3D Systems Pvt. Ltd
        </div>
      </div>

      {/* Footer Bottom */}
    </footer>
  );
}
