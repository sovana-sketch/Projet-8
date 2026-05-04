import React, { useState } from 'react'
import './collapse.css'

export default function Collapse({ title = 'Titre', isOpen = false, content = 'Contenu' }) {
  const [open, setOpen] = useState(isOpen)

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className={`collapse-icon ${open ? 'open' : ''}`}>›</span>
      </button>
      {open && <div className="collapse-content">{content}</div>}
    </div>
  )
}
