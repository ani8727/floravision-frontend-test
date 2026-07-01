import { useState } from "react";
import heroProducts from "../../data/heroProducts";
import ProductCard from "./ProductCard";

function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prev) =>
      prev === heroProducts.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div onClick={nextProduct} className="cursor-pointer">
      <ProductCard
        product={heroProducts[currentIndex]}
        currentIndex={currentIndex}
        total={heroProducts.length}
      />
    </div>
  );
}

export default ProductSlider;