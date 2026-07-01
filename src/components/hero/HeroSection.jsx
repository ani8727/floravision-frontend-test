import HeroContent from "./HeroContent";
import ProductSlider from "./ProductSlider";
import ReviewSlider from "./ReviewSlider";

function HeroSection() {
  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-20 pt-16 pb-20">
      <div className="flex flex-col lg:flex-row justify-between gap-12">

        {/* Left */}
        <div className="flex flex-col justify-between gap-16">
          <HeroContent />
          <ReviewSlider />
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <ProductSlider />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;