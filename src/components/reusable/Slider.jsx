import { useState } from "react";
import { products, generalIcons } from "../../data/data";
import LigthBoxSlider from "./LightBoxSlider";
const DESKTOP_QUERY = "(min-width: 1280px)";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isModalOpen, setiIsModalOpen] = useState(false);

  const { images, imagesThumbnail } = products[0];
  const lastSlideIdx = images.length - 1;

  const handlePrevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? lastSlideIdx : prev - 1));

  const handleNextSlide = () =>
    setActiveSlide((prev) => (prev === lastSlideIdx ? 0 : prev + 1));

  const handleDeskChange = (idx) => {
    setActiveSlide(idx);
  };

  const handleOpenModal = () => {
    if (!window.matchMedia(DESKTOP_QUERY).matches) return;
    setiIsModalOpen(true);
  };

  return (
    <div className="h-75 md:h-72.5 xl:h-142 w-full overflow-hidden relative md:rounded-[15px] xl:rounded-none xl:flex xl:flex-col xl:gap-8">
      <div
        className="flex h-full transition-all duration-300 ease-in-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        onClick={handleOpenModal}
      >
        {images.map((img, idx) => (
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
          className="group size-10 flex items-center justify-center bg-white rounded-full"
          onClick={handlePrevSlide}
        >
          <img
            src={generalIcons.previousIcon}
            alt="Previous slide"
            className="group-hover:filter-[invert(66%)_sepia(62%)_saturate(4388%)_hue-rotate(347deg)_brightness(102%)_contrast(101%)]"
          />
        </button>
        <button
          className="group size-10 flex items-center justify-center bg-white rounded-full"
          onClick={handleNextSlide}
        >
          <img
            src={generalIcons.nextIcon}
            alt="Next slide"
            className="group-hover:filter-[invert(66%)_sepia(62%)_saturate(4388%)_hue-rotate(347deg)_brightness(102%)_contrast(101%)]"
          />
        </button>
      </div>

      {/* Thumbnail icons for desktop */}
      <div className="hidden xl:flex items-center justify-between">
        {imagesThumbnail.map(({ src, alt }, idx) => (
          <button
            key={idx}
            className={`rounded-[10px] overflow-clip relative size-22 hover:bg-white/75 active:bg-white-75  ${idx === activeSlide ? "active-thumbnail bg-white/75" : ""}`}
            onClick={() => handleDeskChange(idx)}
          >
            <img src={src} alt={alt} className="object-cover relative -z-1" />
          </button>
        ))}
      </div>

      {isModalOpen && (
        <LigthBoxSlider
          isVisible={isModalOpen}
          images={images}
          imagesThumbnail={imagesThumbnail}
          activeSlide={activeSlide}
          onClose={setiIsModalOpen}
          onPrev={handlePrevSlide}
          OnNext={handleNextSlide}
          onThumbSelect={handleDeskChange}
        />
      )}
    </div>
  );
}
