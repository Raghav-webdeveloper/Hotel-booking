import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/featureDestination'
import { ExclusiveOffers } from '../components/ExclusiveOffers'
import { Testimonial } from '../components/testimonials'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
        <Hero/>
        <FeatureDestination/>
        <ExclusiveOffers/>
        <Testimonial/>
        <Newsletter/>
      


    </>
  )
}
