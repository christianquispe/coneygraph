import { MEDIA_SCREENS } from '@/config/constants'
import { useEffect, useState } from 'react'

interface IWindowSize {
  width: number
  height: number
}

const useDeviceDetector = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  return { windowSize, isMobile: Number(windowSize.width) < MEDIA_SCREENS.tablet }
}

export default useDeviceDetector
