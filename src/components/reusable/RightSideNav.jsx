import { useState } from "react";
import { generalIcons } from "../../data/data";
import CartModal from "./CartModal";

export default function RightSideNav() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="flex items-center gap-6 md:gap-12">
      <button onClick={handleToggleCart}>
        <img src={generalIcons.cartIcon} alt="Cart icon" />
      </button>
      <img
        src={generalIcons.userAvatar}
        alt="User avatar"
        className="size-6 md:size-12.5"
      />
      {isCartOpen && <CartModal />}
    </div>
  );
}
