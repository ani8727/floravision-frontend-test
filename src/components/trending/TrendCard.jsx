import { ShoppingBag } from "lucide-react";

function TrendCard({ plant }) {
  return (
    <div className="flex justify-center">
      <div
        className={`
          relative
          w-[92%]
          max-w-[1200px]
          min-h-[280px]
          lg:min-h-[320px]
          rounded-[40px] lg:rounded-[60px]
          border border-white/20
          bg-white/[0.05]
          backdrop-blur-xl
          overflow-visible
          px-6 md:px-10 lg:px-14
          py-8
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
          gap-6
        `}
      >
        {/* Plant Side */}
        <div
          className={`
            flex justify-center items-center
            ${plant.reverse ? "lg:order-2" : "lg:order-1"}
          `}
        >
          <img
            src={plant.image}
            alt={plant.title}
            className={`
              w-[220px]
              md:w-[280px]
              lg:w-[380px]
              object-contain
              scale-110
              lg:translate-y-3
            `}
          />
        </div>

        {/* Text Side */}
        <div
          className={`
            text-white
            ${plant.reverse ? "lg:order-1" : "lg:order-2"}
            text-center lg:text-left
          `}
        >
          <h3 className="text-[24px] md:text-[28px] lg:text-[34px] font-semibold leading-tight">
            {plant.title}
          </h3>

          <p className="mt-3 text-white/70 text-[13px] md:text-[15px] leading-relaxed max-w-[450px] mx-auto lg:mx-0">
            {plant.description}
          </p>

          <h4 className="mt-5 text-[24px] md:text-[28px] lg:text-[36px] font-semibold">
            {plant.price}
          </h4>

          {/* Buttons */}
          <div className="mt-5 flex items-center justify-center lg:justify-start gap-4">
            <button className="px-7 py-2.5 rounded-lg border border-white hover:bg-white/10 transition">
              Explore
            </button>

            <button className="w-11 h-11 rounded-lg border border-white flex items-center justify-center hover:bg-white/10 transition">
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendCard;