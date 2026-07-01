import { useEffect, useState } from "react";
import heroReviews from "../../data/heroReviews";
import ReviewCard from "./ReviewCard";

function ReviewSlider() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) =>
        prev === heroReviews.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return <ReviewCard review={heroReviews[currentReview]} />;
}

export default ReviewSlider;