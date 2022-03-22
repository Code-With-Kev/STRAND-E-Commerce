import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slideshow from '../components/Slideshow'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slideshow/>
    </div>
  )
}

export default Home