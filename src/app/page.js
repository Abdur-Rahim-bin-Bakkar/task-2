import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Placeholder anchors for navigation — other sections not implemented */}
      <div id="features" className="sr-only" aria-hidden="true" />
      <div id="solutions" className="sr-only" aria-hidden="true" />
      <div id="pricing" className="sr-only" aria-hidden="true" />
      <div id="about" className="sr-only" aria-hidden="true" />
      <div id="get-started" className="sr-only" aria-hidden="true" />
      <div id="demo" className="sr-only" aria-hidden="true" />
    </>
  );
}
