import React, { useState } from 'react'
import './collapse.css'

export default function Collapse({ title = 'Titre', isOpen = false, content = '' }) {
  const [open, setOpen] = useState(isOpen)

  return (
    <div className="collapse">
      <button className={`collapse-header ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className={`collapse-icon ${open ? 'open' : ''}`}>›</span>
      </button>
      <div className={`collapse-content ${open ? 'open' : ''}`}>{content}</div>
    </div>
  )
}
