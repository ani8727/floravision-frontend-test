import navData from "../../data/navData";

function MobileMenu({ menuOpen }) {
  if (!menuOpen) return null;

  return (
    <div className="absolute top-24 right-4 z-50 w-72 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/20 p-6 md:hidden">
      <div className="flex flex-col gap-5 text-white/75 font-indie text-[22px]">
        {navData.map((item) => (
          <a
            key={item.id}
            href={item.path}
            className="hover:text-green-200 transition"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MobileMenu;