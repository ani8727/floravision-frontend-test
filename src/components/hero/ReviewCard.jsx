import avatar from "../../assets/images/avatar.png";

function ReviewCard() {
  return (
    <div className="w-[409px] h-[237px] border border-white/30 bg-white/5 backdrop-blur-md rounded-[28px] p-6 text-white">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt="Avatar"
          className="w-[64px] h-[64px] rounded-full object-cover"
        />

        <div>
          <h3 className="text-[22px]">Ronnie Hamill</h3>
          <p className="text-yellow-400">★★★★★</p>
        </div>
      </div>

      <p className="mt-6 text-[17px] text-white/75 leading-relaxed">
        I can't express how thrilled I am with my new natural plants! They
        bring such a fresh and vibrant energy to my home.
      </p>
    </div>
  );
}

export default ReviewCard;