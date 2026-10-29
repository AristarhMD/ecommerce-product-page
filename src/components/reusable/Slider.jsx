import { useState } from "react";
import { products, generalIcons } from "../../data/data";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () =>
    setActiveSlide((prev) => (prev - 1 < 0 ? 3 : prev - 1));

  const handleNextSlide = () =>
    setActiveSlide((prev) => (prev + 1 > 3 ? 0 : prev + 1));

  const handleDeskChange = (idx) => {
    setActiveSlide(idx);
  };

  return (
    <div className="h-75 md:h-72.5 xl:h-142 w-full overflow-hidden relative md:rounded-[15px] xl:rounded-none xl:flex xl:flex-col xl:gap-8">
      <div
        className="flex h-full transition-all duration-300 ease-in-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {products[0].images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="h-full w-full shrink-0 md:rounded-[15px] object-cover object-center md:object-[0%_65%] "
          />
        ))}
      </div>

      {/* Mobile navigation for slider */}
      <div className="absolute w-[91.46%] md:w-[95.88%] left-1/2 top-1/2 -translate-1/2 flex justify-between xl:hidden">
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

      <div className="hidden xl:flex items-center justify-between">
        {products[0].imagesThumbnail.map(({ src, alt }, idx) => (
          <button
            key={idx}
            className={`rounded-[10px] overflow-clip relative size-22 hover:bg-white/75 active:bg-white-75  ${idx === activeSlide ? "active-thumbnail bg-white/75" : ""}`}
            onClick={() => handleDeskChange(idx)}
          >
            <img src={src} alt={alt} className="object-cover relative -z-1" />
          </button>
        ))}
      </div>
    </div>
  );
}
