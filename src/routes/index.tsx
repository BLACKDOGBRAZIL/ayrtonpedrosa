import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Areas } from "@/components/site/Areas";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Areas />
        <section id="blog" className="bg-secondary py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary/70">Blog</span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-primary md:text-5xl">
              Insights sobre o Agronegócio
            </h2>
            <p className="mt-5 text-muted-foreground">
              Em breve: artigos, análises e atualizações sobre legislação agrária, ambiental e do agronegócio brasileiro.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
