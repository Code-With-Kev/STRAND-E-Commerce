import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slideshow from '../components/Slideshow'
import Category from '../components/Category'
import Product from '../components/Product'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Category/>
        <Product />
        <Slideshow/>
    </div>
  )
}

export default Home