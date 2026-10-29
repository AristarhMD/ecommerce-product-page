import { useContext, useState } from "react";
import { generalIcons } from "../../data/data";
import { DataContext } from "../DataContext";
import CartModal from "./CartModal";

export default function RightSideNav() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { orderedItem } = useContext(DataContext);

  const handleToggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="flex items-center gap-6 md:gap-12">
      <button
        onClick={handleToggleCart}
        className={`group relative ${orderedItem.length > 0 ? "cart-active" : ""}`}
      >
        <img
          src={generalIcons.cartIcon}
          alt="Cart icon"
          className="group-hover:filter-[brightness(0)_invert(0%)_sepia(100%)_saturate(100%)_hue-rotate(355deg)_brightness(87%)_contrast(114%)]  group-active:filter-[brightness(0)_invert(0%)_sepia(100%)_saturate(100%)_hue-rotate(355deg)_brightness(87%)_contrast(114%)] "
        />
        {orderedItem.length > 0 && (
          <span className="cart-tag">{orderedItem[0].orderQty}</span>
        )}
      </button>
      <button className="rounded-full active:inset-ring-2 active:inset-ring-orange-500 hover:inset-ring-2 hover:inset-ring-orange-500 ">
        <img
          src={generalIcons.userAvatar}
          alt="User avatar"
          className="size-6 rounded-full md:size-12.5 object-cover relative -z-1 "
        />
      </button>
      {isCartOpen && <CartModal isCartOpen={setIsCartOpen} />}
    </div>
  );
}
