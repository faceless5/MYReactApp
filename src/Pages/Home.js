import React from 'react'
import Nav from '../components/Layout/Nav'
import Carousel from '../components/Carousel'
import Footer from '../components/Layout/Footer'
import Products from '../components/Products'
//import './home.css'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Carousel/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home