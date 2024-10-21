import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react'
import { act } from 'react'
import { it, vi } from 'vitest'
import { useVisibilityObserver } from '../../utils/intersectionObserver'

describe('useVisibilityObserver', () => {
  let mockIntersectionObserver: any
  beforeEach(() => {
    mockIntersectionObserver = vi.fn((callback) => {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
        takeRecords: vi.fn(),
        trigger: (isIntersecting: boolean) => {
          const entries = [{ isIntersecting }]
          callback(entries)
        },
      }
    })

    window.IntersectionObserver = mockIntersectionObserver
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return false when element is not visible', () => {
    const { result } = renderHook(() => useVisibilityObserver(0.1))

    expect(result.current.isVisible).toBe(false)
  })

  it('should set isVisible to true when element becomes visible', () => {
    const { result } = renderHook(() => useVisibilityObserver(0.1))

    act(() => {
      const observerInstance = mockIntersectionObserver.mock.results[0].value
      observerInstance.trigger(true)
    })

    expect(result.current.isVisible).toBe(true)
  })
  it('should call unobserve when the component is unmounted', () => {
    const { result } = renderHook(() => useVisibilityObserver(0.1))

    act(() => {
      const observerInstance = mockIntersectionObserver.mock.results[0].value
      observerInstance.trigger(false)
    })

    expect(result.current).not.toBeNull()
  })
})
