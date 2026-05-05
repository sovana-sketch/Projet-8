import React from 'react'
import './rating.css'


export default function Rating({ rating }) {
  
    return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  )
}
