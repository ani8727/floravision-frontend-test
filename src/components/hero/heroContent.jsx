import { Play } from "lucide-react";

function HeroContent() {
  return (
    <div className="text-white max-w-[600px]">
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-[80px] font-semibold leading-none">
        Earth’s Exhale
      </h1>

      <p className="mt-6 text-base md:text-lg lg:text-xl text-white/70 max-w-[700px]">
        “Earth Exhale” symbolizes the purity and vitality of the Earth’s
        natural environment and its essential role in sustaining life.
      </p>

      <div className="flex items-center gap-6 mt-6 flex-wrap">
        <button className="px-6 py-3 border border-white rounded-xl text-lg hover:bg-white hover:text-black transition">
          Buy Now
        </button>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center">
            <Play size={18} fill="white" />
          </div>

          <span className="text-lg">Live Demo...</span>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;