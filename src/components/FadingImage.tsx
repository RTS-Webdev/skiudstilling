'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function FadingImage() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 5)
        }, 10000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full min-h-[calc(100vh-15vh)] flex flex-col items-center">
            <div className="w-full max-w-[70%] mx-auto">
                <div className="relative aspect-[16/9] mb-8">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={`/img/${currentIndex + 1}.jpg`}
                            alt={`Image ${currentIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-cover rounded-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </AnimatePresence>
                </div>
                <div className="space-y-8 pb-16 pt-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">
                            Din specialist i skirejser
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Horizon Travel er etableret i 2005 og er et dansk, privatejet rejsebureau med speciale i skirejser. Vi fokuserer på at skabe skræddersyede skiferier for familier, par og grupper, og vores mangeårige erfaring sikrer, at jeres rejse bliver en uforglemmelig oplevelse. Vores dedikerede team arbejder hver dag for at tilbyde unikke skirejser, hvor alle detaljer er nøje planlagt, så I kan få den bedste ferie med hjem i bagagen.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">
                            Sammen skaber vi jeres skieventyr
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Hos Horizon Travel tror vi på skræddersyede løsninger frem for standardpakker. Vi har intet fast rejsekatalog, da vi designer hver rejse efter jeres specifikke behov og ønsker. Vi lytter til jeres idéer og drømme, og sammen finder vi den skiferie, der passer præcis til jer.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Nogen siger, at heldet følger de vovede – det tror vi ikke på! Gode rejseoplevelser er ikke noget, man overlader til tilfældigheder.{` `}
                            
                            <span className='font-bold text-lg'>
                                Dit næste skieventyr starter her!
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}