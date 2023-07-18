import React from 'react';
import Link from 'next/link';
import Postcard from "../components/postcard"


export default function Post({posts}) {
  console.log(posts)
  return (
    <div className="containe">
   
      <h1 className="text-3xl font-bold mt-40 underline">Blog Posts</h1>
      <div className='grid grid-col-3 gap-5 mt-20 '>
        {posts.data.map((item,index)=>
        <Postcard key={index} data={item}/>)}
      </div>
   
  

    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`,{
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    
    }
  })
  const posts = await res.json()
  return {
    props: {
      posts,
    }
  }
}