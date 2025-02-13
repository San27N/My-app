"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface Heart {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: Heart = {
        id: Date.now(),
        x: Math.random() * 100,
        y: 110, // Start below the screen
        size: Math.random() * 20 + 10,
        opacity: 1,
      }
      setHearts((prevHearts) => [...prevHearts, newHeart])
    }, 300)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setHearts((prevHearts) =>
        prevHearts
          .map((heart) => ({
            ...heart,
            y: heart.y - 1,
            opacity: heart.y < 0 ? 0 : heart.opacity - 0.01,
          }))
          .filter((heart) => heart.opacity > 0),
      )
    }, 50)

    return () => clearInterval(animationInterval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-500"
          style={{
            left: `${heart.x}%`,
            bottom: `${heart.y}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}

export default FloatingHearts

