import Hero from "@/components/sections/Hero";
import Pipeline from "@/components/sections/Pipeline";
import CommandCenter from "@/components/sections/CommandCenter";
import Knowledge from "@/components/sections/Knowledge";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Pipeline />
      <CommandCenter />
      <Knowledge />

      {/* Placeholder anchors for other actions — features, solutions and pricing are handled by sections above */}
      <div id="get-started" className="sr-only" aria-hidden="true" />
      <div id="demo" className="sr-only" aria-hidden="true" />

      <Footer />
    </>
  );
}
