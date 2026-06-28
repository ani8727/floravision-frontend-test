const ReviewCard = ({ review }) => {
  return (
    <div className="w-[380px] h-[220px] rounded-[50px] border border-gray-500 bg-white/5 backdrop-blur-md p-8">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={review.image}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-white text-3xl font-semibold">
            {review.name}
          </h3>

          <p className="text-yellow-400">★★★★★</p>
        </div>
      </div>

      <p className="text-gray-300 text-lg leading-relaxed">
        {review.review}
      </p>
    </div>
  );
};

export default ReviewCard;