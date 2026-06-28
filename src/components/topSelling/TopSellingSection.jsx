import ProductCard from "./ProductCard";
import topSellingData from "../../data/topSellingData";

function TopSellingSection() {
  return (
    <section className="px-10 lg:px-20 py-24">
      <h2 className="text-white text-[60px] font-semibold mb-16">
        Our Top Selling
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {topSellingData.map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
}

export default TopSellingSection;