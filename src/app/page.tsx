import FadingImage from "$/components/FadingImage";
import Navigation from "$/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#100f0f] text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </header>
      <main className="pt-[12vh] md:pt-[15vh]">
        <section className="relative w-full h-[80vh] md:h-screen">
          <FadingImage />
        </section>
      </main>
    </div>
  );
}