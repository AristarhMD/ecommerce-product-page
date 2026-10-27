import { useState } from "react";

export function NavList({ type }) {
  const [isActive, setIsActive] = useState(2);

  const navList = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <ul
      className={` ${!type ? "flex flex-col" : type} gap-6 items-start text-grey-950`}
    >
      {navList.map((item, idx) => (
        <li key={idx}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}
