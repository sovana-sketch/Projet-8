import React from 'react'
import './banner.css'

export default function Banner({ image, label }) {
  return (
    <div className={`Banner${label ? ' Banner--dark' : ''}`}>
      <img className='banner_home' src={image} alt='Banner' />
      {label && <p>{label}</p>}
    </div>
  )
}
