import reviewData from "../../data/reviewData";
import ReviewCard from "./ReviewCard";

const CustomerReview = () => {
  return (
    <section className="py-24">
      <h2 className="text-center text-5xl font-bold text-white mb-16">
        Customer Review
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">
        {reviewData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;