import Image from "next/image";
import eng from "../public/images/engineer-calibrating-drill.jpg"
function Card() {
    return (
      <>
        <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
          <div className="top">

            <Image
              className="w-[200px] h-[200px] object-cover rounded-lg p-2"
              src={eng}
              alt="img"
            />
          </div>
          <div className="bottom flex flex-col justify-center items-start p-3 bg-">
            <div className="title font-semibold text-white text-xl my-1">
              Engineering
            </div>
            <div className="category text-xs text-white font-light my-1">
              4 years
            </div>
  
            <div className="pricing flex text-white items-center">
              
              
              
                Course Fee:4.5L
              
            </div>
            <div className="flex items-center my-2">
              
              <button className="border bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-white px-3 py-1 text-xs rounded-lg ">
               Apply
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Card;