import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Cards from './components/cards/Cards'
import Banner from './components/banner/Banner'
function App() {
  return (
    <>
      <Header />
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
