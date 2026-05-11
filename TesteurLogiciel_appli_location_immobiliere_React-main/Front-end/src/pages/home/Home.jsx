
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import Banner from '../../components/banner/Banner'
import bannerImage from '../../assets/banner.png'
import Cards from '../../components/cards/Cards'

export default function Home() {
  const[properties, setProperties] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => {
        if (!response.ok) {
          navigate('/404')
          return
        }
        return response.json()
      })
      .then(data => { if (data) setProperties(data) })
      .catch(() => navigate('/404'))
  }, [navigate])
  return (

    <div>
      <Banner image={bannerImage} label="Chez vous, partout et ailleurs" />
      <Cards properties={properties} />
    </div>
  )
}
