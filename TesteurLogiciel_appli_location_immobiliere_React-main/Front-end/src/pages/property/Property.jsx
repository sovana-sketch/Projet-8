import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './property.css'
import Slider from '../../components/slider/Slider'
import Collapse from '../../components/top-bars/Collapse'
import TagList from '../../components/tag-list/TagList'
import Rating from '../../components/rating/Rating'
import HostInfo from '../../components/host-info/HostInfo'





export default function Property() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Propriété introuvable')
        }
        return response.json()
      })
      .then(data => {
        setProperty(data)
        setError(null)
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <div className="property-loading">Chargement...</div>
  }

  if (error) {
    return <div className="property-error">Erreur : {error}</div>
  }

  return (
    <div className="property-page">
      <Slider pictures={property?.pictures || []} />
      <div className="property-info">
        <div className="property-info-left">
          <h1 className="property-title">{property?.title || 'Titre non disponible'}</h1>
          <p className="property-location">{property?.location || 'Localisation non disponible'}</p>
        </div>
        <div className="property-info-right">
          <HostInfo host={property?.host} />
        </div>
      </div>
      <div className="property-tags-rating">
        <TagList tags={property?.tags || []} />
        <Rating rating={property?.rating} />
      </div>
      <div className="property-collapses">
        <Collapse key="description" title="Description" content={property?.description || 'Aucune description disponible'} />
        <Collapse key="equipements" title="Équipements" content={property?.equipments?.join(', ') || 'Aucun équipement listé'} />
      </div>
    </div>
  )
}
