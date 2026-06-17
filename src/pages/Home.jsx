
import  { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import FeatureWalkthrough from '../components/FeatureWalkthrough';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import IndexFeature from '../components/IndexFeature';
import MarketingFunnelFeature from '../components/MarketingFunnelFeature';
import Navbar from '../components/Navbar';
import ExpertiseServices from '../components/ExpertiseServices';
import SectorsWeServe from '../components/SectorsWeServe';
import ContactMap from '../components/ContactMap';
import ProcessSection from '../components/ProcessSection';
import TechStack from '../components/TechStack';
import TechStats from '../components/TechStats';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.12, // यूजर जैसे ही थोड़ा स्क्रॉल करेगा तुरंत रिस्पॉन्स मिलेगा
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // अब यह तीनों अलग-अलग स्टाइल के एनिमेटेड सेक्शन्स को ट्रैक करेगा
    const targets = containerRef.current.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center w-full overflow-hidden bg-white">
      {/* नैवबार */}
      <Navbar />
      
      {/* 1. Hero Section: इलास्टिक पॉप-अप इफ़ेक्ट के साथ सबसे पहले खुलेगा */}
      <div className="w-full reveal-up" style={{ transitionDelay: '150ms' }}>
        <HeroSection />
      </div>

      {/* 2. Index Feature: यह स्क्रीन के लेफ्ट साइड से तैरता हुआ आएगा */}
      <div className="w-full reveal-left">
        <IndexFeature />
      </div>

      {/* 3. Marketing Funnel: यह राइट साइड से स्मूथली अंदर आएगा (कंट्रास्ट लुक) */}
      <div className="w-full reveal-right">
        <MarketingFunnelFeature />
      </div>

      {/* 4. Our Expertise: नीचे से 3D बाउंस के साथ स्क्रीन पर उभरेगा */}
      <div className="w-full reveal-up">
        <ExpertiseServices />
      </div>

      {/* 5. Tech Stack Grid: लेफ्ट से आएगा */}
      <div className="w-full reveal-left">
        <TechStack />
      </div>

      {/* 6. Sectors We Serve: राइट से आएगा */}
      <div className="w-full reveal-right">
        <SectorsWeServe />
      </div>

      {/* 7. Process Section: नीचे से ऊपर की ओर पॉप होगा */}
      <div className="w-full reveal-up">
        <ProcessSection />
      </div>

      {/* 8. Feature Walkthrough: लेफ्ट साइड से शानदार एंट्री लेगा */}
      <div className="w-full reveal-left">
        <FeatureWalkthrough />
      </div>

      {/* 9. Tech Stats: डार्क थीम कंपोनेंट है, नीचे से 3D ज़ूम होकर अटेंशन ग्रैब करेगा */}
      <div className=" reveal-up">
        <TechStats />
      </div>

      {/* 10. Testimonials: राइट साइड से स्लाइड होगा */}
      <div className="w-full reveal-right">
        <Testimonials />
      </div>

      {/* 11. Contact Map: आखिरी सेक्शन नीचे से इलास्टिक बाउंस होकर लॉक होगा */}
      <div className="w-full reveal-up">
        <ContactMap />
      </div>

      {/* फुटर */}
      <Footer />
    </div>
  );
};

export default Home;