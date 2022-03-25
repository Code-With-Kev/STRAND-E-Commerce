import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slideshow from '../components/Slideshow'
import Category from '../components/Category'
import Product from '../components/Product'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Category/>
        <Product />
        <Slideshow/>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home