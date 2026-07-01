import ProductCard from "./ProductCard";
import topSellingData from "../../data/topSellingData";

function TopSellingSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20">
      <h2 className="text-center text-white text-[34px] lg:text-[52px] font-semibold mb-20">
        Our Top Selling Plants
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 place-items-center">
        {topSellingData.map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </section>
  );
}

export default TopSellingSection;