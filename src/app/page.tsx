import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Solutions } from "@/components/Solutions";
import { CycleTimeline } from "@/components/CycleTimeline";
import { SuccessStories } from "@/components/SuccessStories";
import { Manifesto } from "@/components/Manifesto";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Partners />
      <Solutions />
      <CycleTimeline />
      <SuccessStories />
      <Manifesto />
      <Contact />
      <Footer />
    </main>
  );
}
