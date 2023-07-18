import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section  class="back bg-cover bg-fixed absolute top-0 left-0 z-[-1] w-full h-screen pt-30% pr-50px text-white text-center">
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='mt-40.3'></div>
    </>
  )
}

export default Back
