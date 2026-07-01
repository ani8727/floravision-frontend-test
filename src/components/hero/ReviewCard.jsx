function ReviewCard({ review }) {
  return (
    <div className="w-[400px] min-h-[220px] rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-white">
      <div className="flex items-center gap-4">
        <img
          src={review.image}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl">{review.name}</h3>
          <p className="text-yellow-400">★★★★★</p>
        </div>
      </div>

      <p className="mt-6 text-white/75 leading-relaxed">
        {review.review}
      </p>
    </div>
  );
}

export default ReviewCard;