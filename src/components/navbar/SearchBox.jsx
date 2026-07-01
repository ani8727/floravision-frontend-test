function SearchBox({ searchOpen }) {
  if (!searchOpen) return null;

  return (
    <div className="absolute top-24 right-28 z-50">
      <input
        type="text"
        placeholder="Search plants..."
        className="
          w-80
          px-5
          py-3
          rounded-2xl
          bg-black/50
          backdrop-blur-xl
          border border-white/20
          text-white
          placeholder:text-white/40
          outline-none
        "
      />
    </div>
  );
}

export default SearchBox;