function TrendCard({
  title,
  description,
  price,
  image,
  reverse = false,
}) {
  return (
    <div
      className={`
        relative
        flex
        items-center
        justify-between
        rounded-[40px]
        border
        border-white/20
        bg-white/5
        backdrop-blur-md
        px-10
        py-8
        min-h-[350px]
        overflow-hidden
        ${reverse ? "flex-row-reverse" : ""}
      `}
    >
      {/* Plant Image */}
      <div className="w-[40%] flex justify-center">
        <img
          src={image}
          alt="plant"
          className="w-[280px] object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="w-[50%] text-white">
        <h3 className="text-[32px] font-semibold leading-tight">
          {title}
        </h3>

        <p className="mt-5 text-white/70 leading-relaxed text-[17px]">
          {description}
        </p>

        <p className="mt-6 text-[28px] font-semibold">
          {price}
        </p>

        <button className="mt-6 px-8 py-3 rounded-xl border border-white hover:bg-white hover:text-black transition">
          Explore
        </button>
      </div>
    </div>
  );
}

export default TrendCard;