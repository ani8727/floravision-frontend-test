import HeroContent from "./HeroContent";
import ProductCard from "./ProductCard";
import ReviewCard from "./ReviewCard";

function HeroSection() {
  return (
    <section className="relative min-h-screen px-10 lg:px-20 pt-28 overflow-hidden">

      {/* Left content */}
      <div className="absolute top-40 left-10 lg:left-20 z-20">
        <HeroContent />
      </div>

      {/* Review Card */}
      <div className="absolute left-10 lg:left-20 bottom-20 z-20">
        <ReviewCard />
      </div>

      {/* Product Card */}
      <div className="absolute right-10 lg:right-20 top-32 z-20">
        <ProductCard />
      </div>
    </section>
  );
}

export default HeroSection;