import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Games } from "@/components/Games";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { RankSystem } from "@/components/RankSystem";
import { LevelTiers } from "@/components/LevelTiers";
import { Events } from "@/components/Events";
import { DiscordCTA } from "@/components/DiscordCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Games />
        <Features />
        <Community />
        <RankSystem />
        <LevelTiers />
        <Events />
        <DiscordCTA />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
