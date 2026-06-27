import navLinks from "../../data/navLinks";
import { Search, ShoppingBag, Menu } from "lucide-react";

// import your logo image here
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <header className="w-full px-6 md:px-12 lg:px-20 py-6">
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="FloraVision Logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />

          <h1 className="text-white text-2xl font-black">
            FloraVision.
          </h1>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-white">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="hover:text-green-300 transition duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-white">
          <Search size={22} className="cursor-pointer" />
          <ShoppingBag size={22} className="cursor-pointer" />
          <Menu size={26} className="cursor-pointer md:hidden lg:block" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;