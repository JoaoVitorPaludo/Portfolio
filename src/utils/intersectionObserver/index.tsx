import { useEffect, useRef, useState } from 'react'

export function useVisibilityObserver(threshold: number) {
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
  }, [threshold])

  return {
    isVisible,
    elementRef,
  }
}
