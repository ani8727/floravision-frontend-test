import TrendCard from "./TrendCard";
import trendingData from "../../data/trendingData";

function TrendingSection() {
  return (
    <section className="px-10 lg:px-20 py-24">
      <h2 className="text-white text-[60px] font-semibold mb-16">
        Our Trendy Plants
      </h2>

      <div className="space-y-16">
        {trendingData.map((plant) => (
          <TrendCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;