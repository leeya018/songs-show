import { slides } from "@/util";
import { useEffect, useState } from "react";

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
    return () => clearInterval(slideInterval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-[40%] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
            {slide.text}
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &#10094; {/* Left arrow icon */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &#10095; {/* Right arrow icon */}
      </button>
    </div>
  );
};

export default Slideshow;
