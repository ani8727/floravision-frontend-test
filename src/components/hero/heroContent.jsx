import { Play } from "lucide-react";

function HeroContent() {
  return (
    <div className="max-w-[800px] text-white">
      {/* Heading */}
      <h1 className="text-[70px] lg:text-[118px] font-semibold leading-none opacity-80">
        Earth’s Exhale
      </h1>

      {/* Description */}
      <p className="mt-8 text-[18px] lg:text-[23px] max-w-[770px] text-white/75">
        “Earth Exhale” symbolizes the purity and vitality of the Earth's
        natural environment and its essential role in sustaining life.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-8 mt-10">
        <button className="w-[217px] h-[64px] border-2 border-white rounded-xl text-[28px]">
          Buy Now
        </button>

        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-[70px] h-[70px] rounded-full border-2 border-white flex items-center justify-center">
            <Play size={26} fill="white" />
          </div>

          <span className="text-[25px]">Live Demo...</span>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;