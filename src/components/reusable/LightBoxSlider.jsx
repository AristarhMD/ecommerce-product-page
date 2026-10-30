import { useEffect } from "react";
import { generalIcons } from "../../data/data";

export default function LigthBoxSlider({
  isVisible,
  images,
  imagesThumbnail,
  activeSlide,
  onClose,
  onPrev,
  OnNext,
  onThumbSelect,
}) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.target.classList.contains("modal-background")) onClose();
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") OnNext();
    };

    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("click", handleKeyPress);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleKeyPress);

      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, OnNext]);

  return (
    <div
      className="bg-black/75 fixed z-2 w-screen h-screen inset-0 flex items-center justify-center modal-background"
      aria-modal="true"
      aria-label="Modal with a clouser look at the item"
      aria-hidden={!isVisible}
      role="dialog"
    >
      <div>
        <div className="relative w-137.5 h-180.5 flex flex-col overflow-hidden">
          <button
            onClick={() => onClose(false)}
            className="group mb-6 self-end"
          >
            <img
              src={generalIcons.closeIcon}
              alt="Close Modal"
              className="group-hover:filter-[invert(50%)_sepia(87%)_saturate(676%)_hue-rotate(344deg)_brightness(99%)_contrast(105%)]"
            />
          </button>

          <div
            className="flex transition-all duration-300 ease-in-out mb-10"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="size-137.5 shrink-0 md:rounded-[15px] object-cover object-center"
              />
            ))}
          </div>

          {/* Thumbnail icons for desktop */}
          <div className="hidden xl:flex items-center justify-between mx-12.5">
            {imagesThumbnail.map(({ src, alt }, idx) => (
              <button
                key={idx}
                className={`rounded-[10px] overflow-clip relative size-22 hover:bg-white/75 active:bg-white-75  ${idx === activeSlide ? "active-thumbnail bg-white/75" : ""}`}
                onClick={() => onThumbSelect(idx)}
              >
                <img
                  src={src}
                  alt={alt}
                  className="object-cover relative -z-1"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Arrows for navigation */}
        <div className="absolute w-148 left-1/2 top-[44.11%] -translate-1/2 flex justify-between z-2">
          <button
            className="group size-10 flex items-center justify-center bg-white rounded-full"
            onClick={onPrev}
          >
            <img
              src={generalIcons.previousIcon}
              alt="Previous slide"
              className="group-hover:filter-[invert(66%)_sepia(62%)_saturate(4388%)_hue-rotate(347deg)_brightness(102%)_contrast(101%)]"
            />
          </button>
          <button
            className="group size-10 flex items-center justify-center bg-white rounded-full"
            onClick={OnNext}
          >
            <img
              src={generalIcons.nextIcon}
              alt="Next slide"
              className="group-hover:filter-[invert(66%)_sepia(62%)_saturate(4388%)_hue-rotate(347deg)_brightness(102%)_contrast(101%)]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
