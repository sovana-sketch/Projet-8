import React from 'react'
import './banner.css'
import bannerImage from '../../assets/banner.png'

export default function Banner() {
  return (
    <div className='Banner'>

      <img className='banner_home' src={bannerImage} alt='Banner' />

      <p>Chez vous, partout et ailleurs</p>
    </div>
  )
}
