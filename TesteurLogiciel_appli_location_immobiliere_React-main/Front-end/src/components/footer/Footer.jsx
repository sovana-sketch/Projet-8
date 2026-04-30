import React, { useState } from 'react'
import './footer.css'
import logo from '../../assets/LOGO_b.svg'

export default function Footer() {
  const [activeTab, setActiveTab] = useState('acceuil')

  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p>&copy; 2020 Your Company. All rights reserved.</p>
    </footer>
  )
}