"use client"

import FadingImage from "$/components/FadingImage";
import Navigation from "$/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#100f0f] text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </header>
      <main className="relative">
        {/* Hero Sektion */}
        <section className="min-h-screen pt-[12vh] md:pt-[15vh]">
          <FadingImage />
        </section>

        {/* Konkurrence Sektion */}
        <section className="relative w-full py-16 bg-gray-50 text-black">
          <div className="w-full max-w-[70%] mx-auto">
            <h2 className="text-3xl font-bold mb-8">Vind en skræddersyedet skiferie!</h2>
            <p className="text-md md:text-lg mb-4">
              Deltag i vores eksklusive konkurrence og få chancen for at vinde en helt skræddersyet skiferie til én af vores fantastiske destinationer. Uanset om du drømmer om en ferie med familien, en romantisk getaway for to, eller en eventyrlig rejse med vennerne, tilpasser vi rejsen præcis til dine ønsker. Alt fra transport og indkvartering til skiudstyr og liftkort er inkluderet. Klik på knappen nedenfor for at deltage og få muligheden for at opleve dit livs skieventyr!
            </p>
            <button
              className="bg-neutral-900 p-4 rounded-xl text-white hover:bg-neutral-700 transition-colors duration-500"
              aria-label="Knap til konkurrence siden"
              onClick={() => {
                window.location.href = "/konkurrence";
              }}
            >
              Læs mere
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
