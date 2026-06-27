import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import TrendingSection from "./components/trending/TrendingSection";
import bg from "./assets/images/hero-bg.jpg";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <HeroSection />
      <TrendingSection />
    </div>
  );
}

export default App;