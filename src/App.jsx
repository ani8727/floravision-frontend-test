import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import TrendingSection from "./components/trending/TrendingSection";
import TopSellingSection from "./components/topSelling/TopSellingSection";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import BestO2 from "./components/bestO2/BestO2";
import Footer from "./components/footer/Footer";
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
      <TopSellingSection />
      <CustomerReview />
      <BestO2 />
      <Footer />
    </div>
  );
}

export default App;