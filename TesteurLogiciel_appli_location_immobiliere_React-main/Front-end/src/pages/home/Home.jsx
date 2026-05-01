
import React,{useEffect, useState} from 'react'
import './Home.css'
import Banner from '../../components/banner/Banner'
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
      <Banner />
      <Cards properties={properties} />
    </div>
  )
}
