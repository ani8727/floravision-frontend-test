const O2Card = ({ plant, currentIndex, total, nextSlide, prevSlide }) => {
  return (
    <div className="relative w-full max-w-[1350px] h-[420px] rounded-[60px] border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden">

      {/* Plant Image */}
      <img
        src={plant.image}
        alt={plant.title}
        className="absolute left-8 bottom-0 w-[380px] z-20"
      />

      {/* Content */}
      <div className="ml-[470px] h-full flex flex-col justify-center pr-16">
        <h2 className="text-white text-4xl font-semibold mb-6">
          {plant.title}
        </h2>

        <p className="text-gray-300 leading-relaxed mb-8 max-w-[550px]">
          {plant.description}
        </p>

        <div className="flex items-center gap-8">
          <button className="border border-white px-8 py-3 rounded-lg text-white hover:bg-white hover:text-black transition">
            Explore
          </button>

          <button
            onClick={prevSlide}
            className="text-white text-2xl"
          >
            &#8249;
          </button>

          <span className="text-white">
            {String(currentIndex + 1).padStart(2, "0")}/
            {String(total).padStart(2, "0")}
          </span>

          <button
            onClick={nextSlide}
            className="text-white text-2xl"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default O2Card;