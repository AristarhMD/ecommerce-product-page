import LeftSideNav from "./reusable/LeftSideNav";
import RightSideNav from "./reusable/RightSideNav";

export function Navigation() {
  return (
    <header className="mx-auto w-[87.2%] md:w-full mb-6 md:mb-12 xl:mb-24">
      <div className="flex justify-between items-center xl:items-stretch xl:relative md:border-b md:border-grey-100 md:pb-8">
        <LeftSideNav />
        <RightSideNav />
      </div>
    </header>
  );
}
