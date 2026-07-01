import { ChevronRight } from "lucide-react";

function ProductCard({ product, currentIndex, total }) {
  return (
    <div className="relative w-[350px] h-[420px] rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20">

      <img
        src={product.image}
        alt={product.name}
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[280px]"
      />

      <div className="absolute bottom-10 left-8 right-8 text-white">
        <p className="text-white/70">{product.category}</p>

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-3xl">{product.name}</h2>
          <ChevronRight />
        </div>

        <button className="mt-5 px-8 py-3 border border-white rounded-xl">
          Buy Now
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {[...Array(total)].map((_, index) => (
            <div
              key={index}
              className={`rounded-full ${
                index === currentIndex
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;