import { useState } from "react";
import { products, generalIcons } from "../../data/data";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(1);

  // const handlePrevSlide = () =>
  //   setActiveSlide((prev) => (prev - 1 < 0 ? 3 : prev - 1));

  // const handleNextSlide = () =>
  //   setActiveSlide((prev) => (prev + 1 > 3 ? 0 : prev + 1));

  const handlePrevSlide = () => setActiveSlide((prev) => prev - 1);

  const handleNextSlide = () => setActiveSlide((prev) => prev + 1);

  return (
    <div className="h-75 w-full overflow-hidden relative">
      <div
        className={`flex transition-all duration-300 ease-in-out translate-x-[-${activeSlide * 100}%]`}
      >
        {products[0].images.map((img, idx) => (
          <img key={idx} src={img.src} alt={img.alt} className="object-cover" />
        ))}
      </div>

      <div className="absolute w-full top-1/2 -translate-y-1/2 flex justify-between">
        <button
          className="size-10 flex items-center justify-center bg-white rounded-full"
          onClick={handlePrevSlide}
        >
          <img src={generalIcons.previousIcon} alt="Previous slide" />
        </button>
        <button
          className="size-10 flex items-center justify-center bg-white rounded-full"
          onClick={handleNextSlide}
        >
          <img src={generalIcons.nextIcon} alt="Next slide" />
        </button>
      </div>
    </div>
  );
}
