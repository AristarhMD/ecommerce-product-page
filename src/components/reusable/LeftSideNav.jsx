import { useState } from "react";
import { NavList } from "./NavList";
import MobNavMenu from "./MobNavMenu";
import { generalIcons } from "../../data/data";

export default function LeftSideNav() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = () => setIsOpenMenu((prev) => !prev);

  return (
    <div className="flex items-center gap-4 xl:gap-14">
      <button
        data-mobnav-toggler
        onClick={handleToggleMenu}
        className="xl:hidden xl:disabled"
      >
        <img src={generalIcons.hamburgerIcon} alt="Hamburger menu icon" />
      </button>
      <img src={generalIcons.logoIcon} alt="Logo of the company" />

      {/* Mobile menu */}
      {isOpenMenu && (
        <MobNavMenu isOpen={isOpenMenu} handleToggleMenu={handleToggleMenu} />
      )}
      {/* Desktop menu */}
      <NavList type="desktop" />
    </div>
  );
}
