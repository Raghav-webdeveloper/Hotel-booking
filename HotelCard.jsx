import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/asset'

export const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={"/rooms/" + room.id}
      onClick={() => scrollTo(0, 0)}
      className="group relative block"
    >

      {/* Hotel Image */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={room.Images[0]}
          alt={room.hotel.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-300"
        />

        {index % 2 === 0 && (
          <p className="absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full">
            Best seller
          </p>
        )}
      </div>

      {/* Hotel Details */}
      <div className="pt-4">

        <div className="flex items-center justify-between">

          <p className="font-playfair text-lg font-medium text-gray-800">
            {room.hotel.name}
          </p>

          <div className="flex items-center gap-1 text-sm">
            <img
              src={assets.stariconfilled}
              alt="star"
              className="w-4 h-4"
            />
            <span>4.5</span>
          </div>

        </div>

        {/* Location */}
        <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">

          <img
            src={assets.locationicon}
            alt="location"
            className="w-3.5 h-3.5"
          />

          <span>{room.hotel.address}</span>

        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">

          <p className="text-sm text-gray-600">
            <span className="text-lg font-medium text-gray-800">
              ${room.pricePerNight}
            </span>
            /night
          </p>

          <button
            onClick={(e) => e.preventDefault()}
            className="px-4 py-1.5 text-xs font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all"
          >
            Book Now
          </button>

        </div>

      </div>

    </Link>
  )
}