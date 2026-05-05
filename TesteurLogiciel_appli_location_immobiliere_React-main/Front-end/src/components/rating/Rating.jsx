import React from 'react'
import './rating.css'


export default function Rating({ rating }) {
  
    return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <i key={i} className={i < rating ? 'fa-solid fa-star star filled' : 'fa-regular fa-star star'} />
      ))}
    </div>
  )
}
