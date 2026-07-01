import { useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import logo from "../../assets/images/logo.png";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import SearchBox from "./SearchBox";
import CartPopup from "./CartPopup";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="relative z-50 w-full px-3 md:px-6 lg:px-10 py-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="FloraVision Logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <h1 className="text-white/75 text-[24px] font-black leading-none">
            FloraVision.
          </h1>
        </div>

        <NavLinks />

        {/* Right Icons */}
        <div className="flex items-center gap-10 text-white">
          <Search
            size={22}
            strokeWidth={1.4}
            className="text-white/75 cursor-pointer hover:text-green-200 transition"
            onClick={() => setSearchOpen(!searchOpen)}
          />

          <ShoppingBag
            size={22}
            strokeWidth={1.4}
            className="text-white/75 cursor-pointer hover:text-green-200 transition"
            onClick={() => setCartOpen(!cartOpen)}
          />

          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setMenuOpen(!menuOpen);
              }
            }}
            className="flex flex-col gap-[8px] cursor-pointer group"
          >
            <span className="w-6 h-[2px] bg-white rounded group-hover:bg-green-200 transition"></span>
            <span className="w-4 h-[2px] bg-white rounded self-end group-hover:bg-green-200 transition"></span>
          </button>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} />
      <SearchBox searchOpen={searchOpen} />
      <CartPopup cartOpen={cartOpen} />
    </header>
  );
}

export default Navbar;