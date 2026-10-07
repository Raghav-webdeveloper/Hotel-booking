import React from 'react'
import { assets } from '../assets/asset'

export const StarRating = ({ rating = 4 }) => {
  return (
    <>
      {Array(5).fill(0).map((_, index) => (
        <img
          key={index}
          src={rating > index ? assets.stariconfilled : assets.stariconOutlined}
          alt="star-icon"
          className="w-4 h-4"
        />
      ))}
    </>
  )
}