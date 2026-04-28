import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Areas } from "@/components/site/Areas";
import { AgroTools } from "@/components/site/AgroTools";
import { NewsSection } from "@/components/site/NewsSection";
import { CommodityTicker } from "@/components/site/CommodityTicker";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  loader: () => ({ year: new Date().getFullYear() }),
});

function Index() {
  const { year } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <CommodityTicker />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Areas />
        <AgroTools />
        <NewsSection />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer year={year} />
      <Toaster richColors position="top-right" theme="dark" />
    </div>
  );
}
