function ProductCard({ plant }) {
  return (
    <div className="rounded-[32px] bg-white/5 backdrop-blur-md border border-white/20 p-6 text-white">
      <div className="flex justify-center">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-[180px] h-[220px] object-contain"
        />
      </div>

      <h3 className="mt-4 text-[28px] font-semibold">
        {plant.name}
      </h3>

      <p className="mt-3 text-white/70 text-sm leading-relaxed">
        {plant.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xl font-semibold">{plant.price}</span>

        <button className="px-4 py-2 rounded-lg border border-white">
          Buy
        </button>
      </div>
    </div>
  );
}

export default ProductCard;