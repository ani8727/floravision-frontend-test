import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import bg from "./assets/images/hero-bg.jpg";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;