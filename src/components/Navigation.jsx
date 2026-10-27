import { useState } from "react";
import { generalIcons } from "../data/data";
import { NavList } from "./reusable/NavList";

export function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => setIsOpenMenu((prev) => !prev);
  return (
    <header className="mx-auto w-[87.2%] md:w-full mb-6 md:mb-12 xl:mb-24">
      <div className="flex justify-between items-center xl:items-stretch xl:relative md:border-b md:border-grey-100 md:pb-8">
        <div className="flex items-center gap-4 xl:gap-14">
          <button onClick={handleToggleMenu} className="xl:hidden">
            <img src={generalIcons.hamburgerIcon} alt="Hamburger menu icon" />
          </button>
          <img src={generalIcons.logoIcon} alt="Logo of the company" />

          {/* Mobile menu */}
          {isOpenMenu && (
            <div className="fixed inset-0 z-1 w-screen h-full bg-black/75">
              <div className="bg-white h-full w-[66.6%] max-w-75 flex flex-col gap-14 ">
                <button onClick={handleToggleMenu}>
                  <img src={generalIcons.closeIcon} alt="Close menu icon" />
                </button>
                <NavList />
              </div>
            </div>
          )}

          <NavList type="desktop" />
        </div>
        <div className="flex items-center gap-6 md:gap-12">
          <button>
            <img src={generalIcons.cartIcon} alt="Cart icon" />
          </button>
          <img
            src={generalIcons.userAvatar}
            alt="User avatar"
            className="size-6 md:size-12.5"
          />
        </div>
      </div>
    </header>
  );
}
