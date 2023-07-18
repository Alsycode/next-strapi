import { blog } from "../dummdata"

const BlogCard = () => {
  return (
    <>
      {blog.map((val,index) => (
        <div className='items w-[300px] h-[600px] shadow-md bg-white'>
          <div className="w-[300px] h-[600px]" alt="Blog Image" >
            <img className="w-[300px] h-[300px]" src={val.cover} key={index} alt='' />
          </div>
          <div className='p-40px 30px'>
            <div className='admin flex justify-between'>
              <span className="uppercase font-medium text-teal-500">
                <i className='fa fa-user'></i>
                <label className=" text-gray-500 text-sm" key={index} htmlFor=''>{val.type}</label>
              </span>
              <span className="uppercase font-medium text-teal-500">
                <i className='fa fa-calendar-alt'></i>
                <label className=" text-gray-500 text-sm" key={index} htmlFor=''>{val.date}</label>
              </span>
              <span className="uppercase font-medium text-teal-500">
                <i className='fa fa-comments'></i>
                <label className=" text-gray-500 text-sm" key={index} htmlFor=''>{val.com}</label>
              </span>
            </div>
            <h1 key={index}>{val.title}</h1>
            <p className="text-gray-500">{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard