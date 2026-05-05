import React, { useState } from 'react'
import './Slider.css'

export default function Slider({ pictures = [] }) {
  const [index, setIndex] = useState(0)
  const count = pictures.length

  if (count === 0) {
    return <div className="slider slider--empty">Aucune image disponible</div>
  }

  const goPrev = () => setIndex(prev => (prev === 0 ? count - 1 : prev - 1))
  const goNext = () => setIndex(prev => (prev === count - 1 ? 0 : prev + 1))

  return (
    <div className="slider">
      <img className="slider-image" src={pictures[index]} alt={`Photo ${index + 1}`} />

      {count > 1 && (
        <>
          <button className="slider-button slider-button--prev" onClick={goPrev} aria-label="Image précédente">
            ‹
          </button>
          <button className="slider-button slider-button--next" onClick={goNext} aria-label="Image suivante">
            ›
          </button>
          <span className="slider-counter">
            {index + 1}/{count}
          </span>
        </>
      )}
    </div>
  )
}
