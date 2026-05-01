import React from 'react'
import './Cards.css'
import { Link } from 'react-router'

export default function Cards({ properties }) {
  return (
    <div className="cards">
      {properties.map(property => (
        <Link className="card" key={property.id} to={`/property/${property.id}`}>
          <img src={property.cover} alt={property.title} />
          <h3>{property.title}</h3>
        </Link>
      ))}
    </div>
  )
}
