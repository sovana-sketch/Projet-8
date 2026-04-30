import React, { useState } from 'react'
import './header.css'
import logo from '../../assets/LOGO.svg'

export default function Header() {
  const [activeTab, setActiveTab] = useState('acceuil')

  return (
    <header className="header-nav">
      <img src={logo} alt="Logo" className="header-logo" />
      <div className="header-actions">
        <button
          type="button"
          className={activeTab === 'acceuil' ? 'header-button active' : 'header-button'}
          onClick={() => setActiveTab('acceuil')}
        >
          Acceuil
        </button>
        <button
          type="button"
          className={activeTab === 'apropos' ? 'header-button active' : 'header-button'}
          onClick={() => setActiveTab('apropos')}
        >
          A Propos
        </button>
      </div>
    </header>
  )
}
