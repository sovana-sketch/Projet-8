import React from 'react'
import './hostinfo.css'

export default function HostInfo({ host }) {
  return (
    <div className="host-info">
      <h2 className="host-name">{host?.name || 'Nom de l\'hôte non disponible'}</h2>
      <img src={host?.picture} alt="Avatar de l'hôte" className="host-avatar" />
    </div>
  )
}
