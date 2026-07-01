import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import TrendingSection from "./components/trending/TrendingSection";
import TopSellingSection from "./components/topSelling/TopSellingSection";
import CustomerReview from "./components/CustomerReview/CustomerReview";
import BestO2 from "./components/bestO2/BestO2";
import Footer from "./components/footer/Footer";
import LandingLayout from "./layouts/LandingLayout";

function App() {
  return (
    <div className="min-h-screen bg-[#07130A]">

      {/* Phase 1 Background Wrapper */}
       <LandingLayout>
        <Navbar />
        <HeroSection />
        <TrendingSection />
      </LandingLayout>

      {/* Phase 2 */}
      
      <TopSellingSection />
       <CustomerReview />
      <BestO2 />
      <Footer />
    </div>
  );
}

export default App;