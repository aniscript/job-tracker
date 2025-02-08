import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import CTA from "./components/cta";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  );
}
