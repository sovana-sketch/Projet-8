import React from 'react'
import './cards.css'
import { Link } from 'react-router'

export default function Cards({ properties }) {
  return (
    <div className="cards">
      {properties.map(property => (
        <Link className="card" key={property.id} to={`/property/${property.id}`} style={{ backgroundImage: `url(${property.cover})` }}>
          <h3>{property.title}</h3>
        </Link>
      ))}
    </div>
  )
}
