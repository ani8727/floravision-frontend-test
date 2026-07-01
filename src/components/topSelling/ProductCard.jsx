import { ShoppingBag } from "lucide-react";

function ProductCard({ plant }) {
  return (
    <div
      className="
        relative
        w-[255px]
        h-[370px]
        rounded-t-[70px]
        rounded-b-[30px]
        bg-gradient-to-b
        from-white/[0.07]
        to-white/[0.02]
        backdrop-blur-2xl
        border border-white/20
        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
        px-5
        pt-[110px]
        pb-5
        text-white
        overflow-visible
      "
    >
      {/* Floating Plant */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-20">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-[185px] h-[205px] object-contain"
        />
      </div>

      <h3 className="text-[22px] font-medium leading-tight">
        {plant.name}
      </h3>

      <p className="mt-3 text-white/70 text-[12px] leading-relaxed min-h-[72px]">
        {plant.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-[26px] font-medium">
          {plant.price}
        </span>

        <button
          className="
            w-10 h-10
            rounded-lg
            border border-white/30
            flex items-center justify-center
            hover:bg-white/10
            transition
          "
        >
          <ShoppingBag size={18} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;