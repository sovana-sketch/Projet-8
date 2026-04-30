import React from 'react'
import './banner.css'
import bannerImage from '../../assets/banner.png'

export default function Banner() {
  return (
    <div className='Banner'>
      <div className='banner_background'>
        <img className='banner_home' src={bannerImage} alt='Banner' />
      </div>
      <p>Chez vous, partout et ailleurs</p>
    </div>
  )
}
