import TrendCard from "./TrendCard";
import trendingData from "../../data/trendingData";

function TrendingSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 lg:py-24">
      <h2 className="text-center text-white text-[32px] md:text-[44px] lg:text-[54px] font-semibold mb-16">
        Our Trendy plants
      </h2>

      <div className="space-y-10 lg:space-y-14">
        {trendingData.map((plant) => (
          <TrendCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;