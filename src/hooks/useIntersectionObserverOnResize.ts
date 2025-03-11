'use client'

import { useEffect, useRef } from 'react'

function useIntersectionObserverOnResize(elementId: string, threshold: number = 0.1) {
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = document.getElementById(elementId)
    if (!element) return

    elementRef.current = element

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold }
    )

    observer.observe(element)

    const handleResize = () => {
      if (elementRef.current) {
        observer.observe(elementRef.current)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [elementId, threshold])

  return elementRef
}

export default useIntersectionObserverOnResize
