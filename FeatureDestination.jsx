import React from 'react'
import { roomDummydata } from '../assets/asset'
import { HotelCard } from './HotelCard'
import { Title } from './Title'
import { useNavigate } from 'react-router-dom'
const FeatureDestination = () => {
  const navigate=useNavigate()
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">
      <Title Title="Featured Destination" subtitle="Discover our handpicked selection of exceptional properties around the world, offering unparalled luxury and unforgettable experiences."/>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {roomDummydata.slice(0, 4).map((room, index) => (
          <HotelCard
            key={room.id}
            room={room}
            index={index}
          />
        ))}
      </div >
      <button onClick={()=>{navigate("/rooms"); scrollTo(0,0)}}
      className='my-16 mx-auto block px-20 py-2 text-sm font-medium  border border-gray-300 rounded bg-white hover:bg-white hover:bg-gray-50 transition-all cursor-pointer'>
        View all Destinations
      </button>

    </div>
  )
}

export default FeatureDestination