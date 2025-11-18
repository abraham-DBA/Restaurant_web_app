import React from 'react'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import PopularRestaurants from '../components/PopularRestaurants'
import PopularMenus from '../components/PopularMenus'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonials from '../components/Testimonials'
// import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <Categories/>
        <PopularRestaurants/>
        <PopularMenus/>
        <ExclusiveOffers/>
        <Testimonials/>
    </div>
  )
}

export default HomePage
