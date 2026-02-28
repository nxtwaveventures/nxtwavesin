import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ServicesBento from "@/components/ServicesBento";
import InsightsGrid from "@/components/InsightsGrid";
import IntegratedCheckout from "@/components/IntegratedCheckout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden font-sans flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <SocialProof />
        <ServicesBento />
        <InsightsGrid />
        <IntegratedCheckout />
      </div>
      <Footer />
    </main>
  );
}
