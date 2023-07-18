import React from "react"
import Back from "./Back"
import BlogCard from "./BlogCard"


const Blog = () => {
  return (
    <>
    
      <section className='blog py-80'>
        <div className=' mx-auto grid grid-cols-3 gap-30'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
