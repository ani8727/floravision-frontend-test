function CartPopup({ cartOpen }) {
  if (!cartOpen) return null;

  return (
    <div className="absolute top-24 right-10 z-50 w-72 bg-black/60 backdrop-blur-xl rounded-2xl p-5 text-white border border-white/20">
      <h3 className="text-lg font-semibold mb-3">Cart</h3>
      <p>No items added yet.</p>
    </div>
  );
}

export default CartPopup;