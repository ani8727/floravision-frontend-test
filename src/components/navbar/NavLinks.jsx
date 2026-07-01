import navData from "../../data/navData";
import { ChevronDown } from "lucide-react";

function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-10 text-white/70 font-normal text-[20px] leading-none font-indie">
      {navData.map((item) => (
        <div key={item.id} className="relative group">
          {/* Main Nav Link */}
          <a
            href={item.path}
            className="flex items-center gap-1 hover:text-green-200 transition"
          >
            {item.label}
            {item.dropdown && <ChevronDown size={14} />}
          </a>

          {/* Dropdown */}
          {item.dropdown && (
            <div className="absolute top-8 left-0 hidden group-hover:flex flex-col min-w-[180px] rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 p-4">
              {item.items.map((plant, index) => (
                <a
                  key={index}
                  href={plant.path}
                  className="py-2 text-white/75 hover:text-green-200 transition"
                >
                  {plant.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default NavLinks;