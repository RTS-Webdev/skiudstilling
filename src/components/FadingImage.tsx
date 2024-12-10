'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface FadingImageProps {
  interval?: number
}

const images = [
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
]

export function FadingImage({interval = 5000 }: FadingImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={"Image " + currentIndex}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </AnimatePresence>
  )
}