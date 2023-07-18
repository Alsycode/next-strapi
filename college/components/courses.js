import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Coursecard from './coursecard';
const Courses = ({posts}) => {
 console.log(posts)
  return (
  <div className="container mx-auto py-10 max-w-[1100px] ">

<h1 className="text-3xl font-bold underline">

Blog Posts

</h1>

<div className="grid grid-cols-3 gap-10">

<div className="bg-slate-800 rounded-lg p-8">

<h2 className="text-2xl font-bold">Post 1</h2>

<p className="text-pray-400">Short description</p>


<Link href="#">

<button>Post Link</button>

</Link>
</div>
  </div>
    </div>
  );
};


export default Courses;

export async function getStaticProps() {
  const res = await fetch(`$(process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`, {

    headers: {
    
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  }
})
    
    
    const posts = await res.json()
    
    return {
    
    props:
     {
      posts,
    },
    revalidate:60
    }
  }
