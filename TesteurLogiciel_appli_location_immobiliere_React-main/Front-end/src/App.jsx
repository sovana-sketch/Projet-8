import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Property from './pages/property/Property'
function App() {
  return (
    <>
      <Header />
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<Property />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
