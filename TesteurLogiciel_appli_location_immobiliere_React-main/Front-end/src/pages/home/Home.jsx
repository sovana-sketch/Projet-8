
import React,{useEffect, useState} from 'react'
import './Home.css'
import Banner from '../../components/banner/Banner'
import bannerImage from '../../assets/banner.png'
import Cards from '../../components/cards/Cards'

export default function Home() {
  const[properties, setProperties] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])
  return ( 
  
    <div>
      <Banner image={bannerImage} label="Chez vous, partout et ailleurs" />
      <Cards properties={properties} />
    </div>
  )
}
