import { useContext } from "react";
import { DataContext } from "../DataContext";

export function NavList({ type }) {
  const { orderedItem } = useContext(DataContext);

  const navList = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <ul
      className={` ${!type ? "flex flex-col" : type} gap-6 items-start text-grey-950`}
    >
      {navList.map((item, idx) => (
        <li
          key={idx}
          className={orderedItem[0] && idx === 2 ? "after:desk-nav" : ""}
        >
          <a
            className={orderedItem[0] && idx === 2 ? "text-grey-950" : ""}
            href="#"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
