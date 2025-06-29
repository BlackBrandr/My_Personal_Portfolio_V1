import { useState, useEffect } from 'react'

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    // Check if mobile
    setIsMobile(window.innerWidth <= 768)

    const handleChange = () => {
      setReducedMotion(mediaQuery.matches)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    mediaQuery.addEventListener('change', handleChange)
    window.addEventListener('resize', handleResize)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { reducedMotion, isMobile }
}

export function getMobileOptimizedTransition(baseTransition, isMobile) {
  if (isMobile) {
    return {
      ...baseTransition,
      duration: Math.min(baseTransition.duration || 0.5, 0.2),
      delay: 0,
    }
  }
  return baseTransition
}