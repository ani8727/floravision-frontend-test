import TrendCard from "./TrendCard";
import plant1 from "../../assets/images/trend-plant/trend-1.png";
import plant2 from "../../assets/images/trend-plant/trend-2.png";

function TrendingSection() {
  const trendingPlants = [
    {
      id: 1,
      title: "For Your Desks Decorations",
      description:
        "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
      price: "Rs. 599/-",
      image: plant1,
      reverse: false,
    },
    {
      id: 2,
      title: "For Your Desks Decorations",
      description:
        "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.",
      price: "Rs. 399/-",
      image: plant2,
      reverse: true,
    },
  ];

  return (
    <section className="px-10 lg:px-20 py-24">
      {/* Heading */}
      <div className="mb-16 text-white">
        <h2 className="text-[52px] lg:text-[64px] font-semibold">
          Our Trendy Plants
        </h2>
      </div>

      {/* Cards */}
      <div className="space-y-16">
        {trendingPlants.map((plant) => (
          <TrendCard
            key={plant.id}
            title={plant.title}
            description={plant.description}
            price={plant.price}
            image={plant.image}
            reverse={plant.reverse}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;