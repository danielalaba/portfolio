'use client'

import { useEffect, useRef } from 'react'

interface VantaEffect {
  destroy: () => void
}

interface VantaTrunkOptions {
  el: HTMLElement
  p5: unknown
  mouseControls: boolean
  touchControls: boolean
  gyroControls: boolean
  minHeight: number
  minWidth: number
  scale: number
  scaleMobile: number
  color: number
  spacing: number
  chaos: number
  backgroundColor?: number
}

interface VantaModule {
  default: (options: VantaTrunkOptions) => VantaEffect
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<VantaEffect | null>(null)

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Dynamically import Vanta and p5 only on client side
      Promise.all([
        import('p5'),
        import('vanta/dist/vanta.trunk.min') as Promise<VantaModule>
      ]).then(([p5Module, VANTA]) => {
        if (vantaRef.current) {
          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            p5: p5Module.default,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xcdc8c8,
            backgroundColor: 0x141212,
            spacing: 2.00,
            chaos: 2.00
          })
        }
      }).catch((error) => {
        console.error('Failed to load Vanta effect:', error)
      })
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.6
      }}
    />
  )
}
