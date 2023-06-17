import { useState } from 'react'
import Header from './components/Header'
import '/public/vendor/bootstrap/css/bootstrap.min.css'
import '/public/vendor/bootstrap-icons/bootstrap-icons.css'
import '/public/vendor/glightbox/css/glightbox.min.css'
import '/public/vendor/swiper/swiper-bundle.min.css'

import '/public/css/style.css'
import { Home } from './pages/Home'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
      
  )
}

export default App
