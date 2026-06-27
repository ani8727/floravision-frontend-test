import plant from "../../assets/images/product-plant/product-1.png";
import { ChevronRight } from "lucide-react";

function ProductCard() {
  return (
    <div className="relative w-[420px] h-[580px] rounded-[40px] bg-white/5 backdrop-blur-md border border-white/20">

      {/* Plant Image */}
      <img
        src={plant}
        alt="Plant"
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px]"
      />

      {/* Content */}
      <div className="absolute bottom-12 left-10 right-10 text-white">
        <p className="text-[23px] text-white/75">Indoor Plant</p>

        <div className="flex justify-between items-center mt-3">
          <h2 className="text-[36px]">Aglaonema plant</h2>
          <ChevronRight size={24} />
        </div>

        <button className="mt-6 w-[217px] h-[64px] rounded-xl border-2 border-white text-[28px]">
          Buy Now
        </button>

        {/* Slider dots */}
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-6 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;