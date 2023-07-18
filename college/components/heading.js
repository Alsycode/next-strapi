import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div className="flex justify-center">
        <div>   <h3>{subtitle} </h3></div>
     
        <h1>{title} </h1>
      </div>
    </>
  )
}

export default Heading