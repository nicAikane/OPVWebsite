import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeatureCards from '@/components/FeatureCards';
import SponsorsSection from '@/components/SponsorsSection';
import ScheduleSection from '@/components/ScheduleSection';
import TournamentSection from '@/components/TournamentSection';
import CaptainsCornerSection from '@/components/CaptainsCornerSection';
import BoardSection from '@/components/BoardSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function OPVHome() {
  return (
    <main id="main" role="main" className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeatureCards />
      <ScheduleSection />
      <CaptainsCornerSection />
      <SponsorsSection />
      <TournamentSection />
      <BoardSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
