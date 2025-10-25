'use client'
import React, { ReactNode } from 'react'

interface LiquidCardProps {
  children?: ReactNode
  className?: string
  style?: React.CSSProperties
}

const LiquidCard = ({ children, className = '', style = {} }: LiquidCardProps) => {
  return (
    <div>
      <div
        className={`liquid-card ${className}`}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: '1.5rem',
          overflow: 'hidden',
          borderRadius: '28px',
          position: 'relative',
          transition: 'opacity 0.26s ease-out',
          filter: 'drop-shadow(-8px -10px 46px rgba(0, 0, 0, 0.37))',
          backdropFilter: 'brightness(1.1) blur(2px) url(#displacementFilter)',
          WebkitBackdropFilter: 'brightness(1.1) blur(2px) url(#displacementFilter)',
          ...style, // Your custom styles override defaults
        }}
      >
        <div
          style={{
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
            borderRadius: '28px',
            WebkitBoxShadow: 'inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7), inset 0 0 3px 1px rgba(255, 255, 255, 0.7)',
            boxShadow: 'inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7), inset 0 0 8px 1px rgba(255, 255, 255, 0.7)',
            pointerEvents: 'none'
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </div>

      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="displacementFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves="2"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="200"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default LiquidCard
