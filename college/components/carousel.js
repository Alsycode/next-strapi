import Card from "../components/card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 410;
  };
  
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 410;
  };

  return (
    <div className="bg-black h-screen">
  <div className="text-center py-4 text-xl pt-32 text-white font-bold">Courses</div>
  <div className="flex items-center mt-16 justify-center">
    <button
      onClick={scrollLeft}
      className="p-3 m-3 rounded-full mb-24 bg-white"
    >
      <FiChevronLeft className="w-16 h-16" />
    </button>
    <div
      id="content"
      className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide overflow-x-hidden"
      style={{ width: "calc(4 * 220px)" }} // Set width for 4 cards
    >
      <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
    </div>
    <button
      onClick={scrollRight}
      className="p-3 m-3 rounded-full mb-24 bg-white"
    >
      <FiChevronRight className="w-16 h-16" />
    </button>
  </div>
</div>

  );
}

export default Carousel;
