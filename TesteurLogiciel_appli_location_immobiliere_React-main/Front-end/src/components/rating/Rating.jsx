import React from 'react'
import './rating.css'

export default function Rating({ rating }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <i key={i} className={`fa-solid fa-star star ${i < rating ? 'filled' : ''}`} />
      ))}
    </div>
  )
}
