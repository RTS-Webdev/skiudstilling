import { FadingImage } from "$/components/FadingImage";
import Navigation from "$/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </header>
      <main className="pt-[15vh]">
        <section className="relative w-full h-screen">
          <h2 className="text-center mb-4 font-semibold text-4xl">Headline</h2>
          <FadingImage />
        </section>
      </main>
    </div>
  );
}
