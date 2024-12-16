"use client"

import Navigation from "$/components/Navigation";

export default function Servicevilkaar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#100f0f] text-white overflow-x-hidden">
      <header className="fixed top-0 right-0 left-0 z-50">
        <Navigation />
      </header>
      <main className="relative">
        <section className="min-h-screen pt-[12vh] md:pt-[15vh] pb-16" aria-label="Servicevilkår sektion">
          <div className="w-full max-w-[70%] mx-auto">
            <h1 className="text-4xl font-bold mb-8">Servicevilkår</h1>
            <div className="text-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">1. Acceptering af vilkår</h2>
              <p className="text-md md:text-lg mb-4">
                Velkommen til Horizon Travel. Ved at tilgå eller bruge vores hjemmeside, mobilapplikationer og tjenester (samlet kaldet "Tjenesten"), accepterer du at overholde og være bundet af disse Servicevilkår ("Vilkår"). Hvis du ikke accepterer alle Vilkårene, må du ikke tilgå eller bruge Tjenesten. Vi forbeholder os retten til at ændre eller erstatte disse Vilkår til enhver tid uden forudgående varsel. Din fortsatte brug af Tjenesten efter offentliggørelsen af eventuelle ændringer i Vilkårene udgør accept af disse ændringer.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Beskrivelse af tjenesten</h2>
              <p className="text-md md:text-lg mb-4">
                Horizon Travel leverer rejserelaterede oplysninger og bookingtjenester. Vi stræber efter at sikre nøjagtigheden af alle præsenterede oplysninger, men vi kan ikke garantere, at alle oplysninger er fuldstændige eller aktuelle. Indholdet af denne Tjeneste kan ændres uden varsel. Vi garanterer ikke, at Tjenesten vil være uafbrudt eller fejlfri. Du accepterer, at din brug af Tjenesten sker på egen risiko.
              </p>

              <h2 className="text-2xl font-bold mb-4">3. Brugerkonti</h2>
              <p className="text-md md:text-lg mb-4">
                For at få adgang til visse funktioner i Tjenesten kan du være nødt til at oprette en konto. Du er ansvarlig for at opretholde fortroligheden af din konto og adgangskode. Du accepterer at påtage dig ansvaret for alle aktiviteter, der foregår under din konto. Du skal straks underrette os om enhver uautoriseret brug af din konto eller ethvert andet brud på sikkerheden.
              </p>

              <h2 className="text-2xl font-bold mb-4">4. Brugeradfærd</h2>
              <p className="text-md md:text-lg mb-4">
                Du accepterer ikke at bruge Tjenesten til noget ulovligt formål eller på nogen måde, der afbryder, beskadiger eller forringer Tjenesten. Du accepterer endvidere ikke at bruge Tjenesten til at transmittere eller indsende indhold, der er ærekrænkende, stødende eller på anden måde uacceptabelt.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Intellektuel ejendomsret</h2>
              <p className="text-md md:text-lg mb-4">
                Tjenesten og dens originale indhold, funktioner og funktionalitet ejes af Horizon Travel og er beskyttet af internationale love om ophavsret, varemærker, patenter, forretningshemmeligheder og andre intellektuelle ejendomsrettigheder eller ejendomsrettigheder.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Tredjepartslinks</h2>
              <p className="text-md md:text-lg mb-4">
                Vores Tjeneste kan indeholde links til tredjepartswebsteder eller -tjenester, som ikke ejes eller kontrolleres af Horizon Travel. Vi har ingen kontrol over og påtager os intet ansvar for indholdet, privatlivspolitikker eller praksis på nogen tredjepartswebsteder eller -tjenester.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Opsigelse</h2>
              <p className="text-md md:text-lg mb-4">
                Vi kan opsige eller suspendere din konto og nægte adgang til Tjenesten øjeblikkeligt, uden forudgående varsel eller ansvar, efter vores eget skøn, af en hvilken som helst grund og uden begrænsning, herunder men ikke begrænset til et brud på Vilkårene.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Ansvarsbegrænsning</h2>
              <p className="text-md md:text-lg mb-4">
                Under ingen omstændigheder skal Horizon Travel eller dets direktører, medarbejdere, partnere, agenter, leverandører eller tilknyttede selskaber være ansvarlige for nogen indirekte, hændelige, særlige, følgemæssige eller pønale skader, herunder uden begrænsning, tab af fortjeneste, data, brug, goodwill eller andre immaterielle tab, der skyldes din adgang til eller brug af eller manglende evne til at få adgang til eller bruge Tjenesten.
              </p>

              <h2 className="text-2xl font-bold mb-4">9. Gældende lov</h2>
              <p className="text-md md:text-lg mb-4">
                Disse Vilkår skal reguleres og fortolkes i overensstemmelse med lovene i Danmark, uden hensyn til dets lovvalgsregler.
              </p>

              <h2 className="text-2xl font-bold mb-4">10. Ændringer i vilkårene</h2>
              <p className="text-md md:text-lg mb-4">
                Vi forbeholder os retten til, efter eget skøn, at ændre eller erstatte disse Vilkår til enhver tid. Hvad der udgør en væsentlig ændring, vil blive bestemt efter vores eget skøn. Ved fortsat at tilgå eller bruge vores Tjeneste, efter at disse revisioner er trådt i kraft, accepterer du at være bundet af de reviderede vilkår.
              </p>

              <h2 className="text-2xl font-bold mb-4">11. Kontakt os</h2>
              <p className="text-md md:text-lg mb-4">
                Hvis du har spørgsmål om disse Vilkår, bedes du kontakte os på [kontakt@email.com].
              </p>

              <h2 className="text-2xl font-bold mb-4">12. Indsamling og brug af data</h2>
              <p className="text-md md:text-lg mb-4">
                Du anerkender og giver samtykke til, at vi kan indsamle, opbevare og bruge dine personlige oplysninger, herunder men ikke begrænset til dit navn, e-mailadresse, browseraktivitet og brugsmønstre, til formål som markedsføring, analyse og forbedring af vores tjenester. Disse data kan blive delt med og solgt til tredjeparter, annoncører, partnere, tilknyttede selskaber og andre enheder, som vi finder passende, både indenfor og udenfor vores organisation.
              </p>

              <h2 className="text-2xl font-bold mb-4">13. Uopfordrede kommunikationer</h2>
              <p className="text-md md:text-lg mb-4">
                Ved at acceptere disse betingelser giver du os ubegrænset ret til at sende dig uopfordrede reklame-e-mails, nyhedsbreve, tilbud og andre markedsføringsmaterialer, uanset om du har tilmeldt dig eller udtrykt interesse. Du forstår og accepterer, at disse kommunikationer kan blive sendt til dig på ubestemt tid, og at vi ikke er forpligtet til at stoppe med at sende dem på noget tidspunkt, selvom du afmelder dig eller vælger at fravælge.
              </p>

              <h2 className="text-2xl font-bold mb-4">14. Ingen forpligtelse til at beskytte data</h2>
              <p className="text-md md:text-lg mb-4">
                Vi forbeholder os retten til at overføre eller dele dine personlige data med tredjeparter, herunder men ikke begrænset til forretningspartnere, annoncører og tilknyttede selskaber, efter eget skøn, uden yderligere varsel til dig. Vi giver ingen garantier for, hvordan tredjeparter vil bruge eller beskytte dine oplysninger, når de er delt.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}