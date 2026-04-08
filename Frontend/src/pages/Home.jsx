import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EngineCoreSection from '../components/EngineCoreSection';
import TerminalSection from '../components/TerminalSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col bg-protocol-grid font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <EngineCoreSection />
        <TerminalSection />
        <FeaturesSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
