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
        <AnimatePresence mode="wait">
            <motion.img
                key={currentIndex}
                src={`/img/${currentIndex + 1}.jpg`}
                alt={"Image " + currentIndex + 1}
                className="absolute inset-0 w-full md:w-[80%] h-[90%] object-cover mx-auto md:rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            />
        </AnimatePresence>
    )
}
