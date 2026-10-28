import { NavList } from "./NavList";
import { generalIcons } from "../../data/data";

export default function MobNavMenu({ handleToggleMenu }) {
  return (
    <div className="fixed inset-0 z-1 w-screen h-full bg-black/75 xl:hidden">
      <div className="bg-white h-full w-[66.6%] max-w-75 flex flex-col gap-14 px-[6.5%] md:px-[10.5%] py-6  md:py-12">
        <button onClick={handleToggleMenu} className="xl:hidden xl:disabled">
          <img src={generalIcons.closeIcon} alt="Close menu icon" />
        </button>
        <NavList />
      </div>
    </div>
  );
}
