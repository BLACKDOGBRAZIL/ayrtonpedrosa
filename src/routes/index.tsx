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
  loader: () => ({ year: new Date().getFullYear() }),
});

function Index() {
  const { year } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Areas />
        <section id="blog" className="relative bg-background py-28 md:py-40">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold">— Blog —</p>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] text-foreground md:text-6xl">
              Insights sobre o <span className="italic text-gold">agronegócio</span>.
            </h2>
            <div className="mx-auto mt-8 h-px w-32 gold-divider" />
            <p className="mt-8 text-base leading-relaxed text-foreground/70 md:text-lg">
              Em breve: artigos, análises e atualizações sobre legislação agrária, ambiental e do agronegócio brasileiro.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer year={year} />
      <Toaster richColors position="top-right" theme="dark" />
    </div>
  );
}
