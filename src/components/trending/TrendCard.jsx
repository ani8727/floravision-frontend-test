function TrendCard({ plant }) {
  return (
    <div
      className={`
        flex items-center justify-between
        rounded-[48px]
        bg-white/5
        backdrop-blur-md
        border border-white/20
        px-12 py-10
        min-h-[360px]
        ${plant.reverse ? "flex-row-reverse" : ""}
      `}
    >
      {/* Plant */}
      <div className="w-[40%] flex justify-center">
        <img
          src={plant.image}
          alt={plant.title}
          className="w-[300px] object-contain"
        />
      </div>

      {/* Text */}
      <div className="w-[50%] text-white">
        <h3 className="text-[36px] font-semibold leading-tight">
          {plant.title}
        </h3>

        <p className="mt-6 text-white/75 leading-relaxed text-[18px]">
          {plant.description}
        </p>

        <h4 className="mt-6 text-[28px] font-semibold">
          {plant.price}
        </h4>

        <button className="mt-6 px-8 py-3 rounded-xl border border-white">
          Explore
        </button>
      </div>
    </div>
  );
}

export default TrendCard;