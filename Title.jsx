import React from 'react'

export const Title = ({Title, subtitle,font,align}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align=== "left" && "md:items-start md:text-left"}`}>
        <h1 className={`text-4xl md:text-[40px] ${font ||"font-playfair"}`}>{Title}</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-4 max-w-174'>{subtitle}</p>
    </div>
  )
}
