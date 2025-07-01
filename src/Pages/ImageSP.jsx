// components/ImageSlider.jsx
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SingleImg from "../assets/post1.png";
import SecImg from "../assets/post2.png";
import ThreeImg from "../assets/post3.png";

const images = [SingleImg, SecImg, ThreeImg];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get indexes for side images
  const getLeftIndex = () =>
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const getRightIndex = () =>
    currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="relative w-full max-w-5xl mx-auto p-6 ">
      <div className="relative flex items-center justify-center h-[450px] overflow-hidden">
        {/* Left Preview Image */}
        <img
          src={images[getLeftIndex()]}
          alt="left preview"
          className="absolute left-6 w-[250px] h-[350px] object-cover rounded-xl opacity-60 backdrop-blur-md shadow-lg scale-95 transition duration-500 z-10"
          style={{
            filter: "blur(3px)",
          }}
        />

        {/* Center Main Image */}
        <img
          src={images[currentIndex]}
          alt="main"
          className="z-20 w-[900px] h-[450px] object-cover rounded-3xl shadow-2xl scale-100 transition duration-500"
        />

        {/* Right Preview Image */}
        <img
          src={images[getRightIndex()]}
          alt="right preview"
          className="absolute right-6 w-[250px] h-[350px] object-cover rounded-xl opacity-60 backdrop-blur-md shadow-lg scale-95 transition duration-500 z-10"
          style={{
            filter: "blur(3px)",
          }}
        />

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 backdrop-blur-md p-2 rounded-full z-30 shadow"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 backdrop-blur-md p-2 rounded-full z-30 shadow"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Dots Indicator */}
    </div>
  );
}
