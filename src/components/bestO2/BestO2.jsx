import { useState } from "react";
import bestO2Data from "../../data/bestO2Data";
import O2Card from "./O2Card";

const BestO2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === bestO2Data.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? bestO2Data.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-28 px-6">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-white text-5xl font-bold">
          Our Best o2
        </h1>
      </div>

      {/* Card */}
      <div className="flex justify-center">
        <O2Card
          plant={bestO2Data[currentIndex]}
          currentIndex={currentIndex}
          total={bestO2Data.length}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {bestO2Data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full ${
              currentIndex === index
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default BestO2;