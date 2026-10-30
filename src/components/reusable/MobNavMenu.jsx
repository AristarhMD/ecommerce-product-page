import { NavList } from "./NavList";
import { generalIcons } from "../../data/data";
import { useEffect, useRef } from "react";

export default function MobNavMenu({ isOpen, handleToggleMenu }) {
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handlePointerDown = (e) => {
      if (mobileNavRef.current?.contains(e.target)) return;
      if (e.target.closest("[data-mobnav-toggler]")) return;
      handleToggleMenu();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, handleToggleMenu]);

  return (
    <div
      className="fixed inset-0 z-4 w-screen h-full bg-black/75 xl:hidden"
      aria-roledescription="mobile nav"
      aria-label="mobile nav"
      aria-hidden={!isOpen}
      aria-live="assertive"
    >
      <div
        className="bg-white h-full w-[66.6%] max-w-75 flex flex-col gap-14 px-[6.5%] md:px-[10.5%] py-6  md:py-12 overflow-scroll"
        ref={mobileNavRef}
      >
        <button className="xl:hidden xl:disabled" onClick={handleToggleMenu}>
          <img src={generalIcons.closeIcon} alt="Close menu icon" />
        </button>
        <NavList />
      </div>
    </div>
  );
}
