import React from "react";
import { quickLinks, socialLinks } from "../../data/footerData";
const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-[#081B08] text-white px-8 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        {/* top dots */}
        <div className="flex justify-center gap-2 mb-20">
          <div className="w-6 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="logo" className="w-10 h-10" />
              <h2 className="text-4xl font-bold">FloraVision.</h2>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-sm mb-12">
              “From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment.”
            </p>

            <div className="flex gap-8 font-semibold text-lg">
              {socialLinks.map((social) => (
                <span key={social.id} className="cursor-pointer">
                  {social.name}
                </span>
              ))}
            </div>
          </div>

          {/* Center */}
          <div>
            <h3 className="font-bold text-2xl mb-6">Quick Link's</h3>

            <div className="space-y-4">
              {quickLinks.map((link) => (
                <p
                  key={link.id}
                  className="cursor-pointer hover:text-green-400 transition"
                >
                  {link.name}
                </p>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="font-bold text-2xl mb-6">For Every Update.</h3>

            <div className="flex border border-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-transparent px-4 py-3 w-full outline-none"
              />
              <button className="bg-white text-black px-5 font-semibold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-16 text-gray-300">
          FloraVision © all right reserve
        </div>
      </div>
    </footer>
  );
};

export default Footer;