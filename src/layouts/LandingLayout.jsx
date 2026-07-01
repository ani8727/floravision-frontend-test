import bg from "../assets/images/hero-bg.jpg";
function LandingLayout({ children }) {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </div>
  );
}

export default LandingLayout;