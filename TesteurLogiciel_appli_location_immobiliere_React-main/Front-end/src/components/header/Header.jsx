import React from 'react'
import './header.css'
import logo from '../../assets/LOGO.svg'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <header className="header-nav">
      <img src={logo} alt="Logo" className="header-logo" />
      <div className="header-actions">
        <Link
          to="/"
          className={location.pathname === '/' ? 'header-button active' : 'header-button'}
        >
          Acceuil
        </Link>
        <Link
          to="/about"
          className={location.pathname === '/about' ? 'header-button active' : 'header-button'}
        >
          A Propos
        </Link>
      </div>
    </header>
  )
}
