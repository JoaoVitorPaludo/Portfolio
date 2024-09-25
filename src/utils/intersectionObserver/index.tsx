import { useEffect, useRef, useState } from 'react'

export function useVisibilityObserver(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        setIsVisible(entry.isIntersecting)
      })
    }

    const observer = new IntersectionObserver(handleIntersection, { threshold })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold])

  return {
    isVisible,
    elementRef,
  }
}
