import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import eng from "../public/images/engineer-calibrating-drill.jpg"
const coursecard = () => {
    
  return (
    <div className="flex justify-center space-x-8">
          <div  className="bg-black bg-opacity-75 rounded-lg p-6 text-white">
            <h1 className="text-2xl font-bold text-center mb-4">Course 1</h1>
            <div className="top w-[300px] h-[200px] object-cover ">

<Image
  className="w-[400px] h-[200px] object-cover rounded-lg p-2"
  src={eng}
  alt="img"
/>
</div>
           
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dapibus enim ut nisl aliquam vehicula.
            </p>
            <div className="flex justify-center"> <button className="bg-white text-black text-center py-2 px-4 rounded">
              Apply
            </button></div>
          </div>
          </div>
  )
}

export default coursecard