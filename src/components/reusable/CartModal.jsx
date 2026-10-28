import { useContext } from "react";
import { DataContext } from "../DataContext";
import { generalIcons } from "../../data/data";

export default function CartModal() {
  const { orderedItem, setOrderedItem } = useContext(DataContext);

  const handleDeleteCart = () => setOrderedItem([]);

  return (
    <aside className="absolute top-19 md:top-23.5 xl:top-16.5 right-2 xl:-right-22 w-90 h-64 py-6 bg-white rounded-[10px]">
      <p className="preset-3-b text-grey-950 mb-6 px-3">Cart</p>
      <article className="px-6 pt-6 border-t border-grey-100 flex flex-col items-center justify-center gap-6">
        {orderedItem.length > 0 ? (
          <>
            <div className="flex items-center gap-4 ">
              <img
                className="size-12.5 rounded-sm"
                src={orderedItem[0].imagesThumbnail[0].src}
                alt={`Image of the ${orderedItem[0].header}`}
              />
              <div>
                <p className="preset-3-r text-grey-500">
                  {orderedItem[0].header}
                </p>
                <p className=" flex gap-2 preset-3-r text-grey-500">
                  ${orderedItem[0].price} x {orderedItem[0].orderQty}
                  <span className="preset-3-b text-grey-950">
                    $
                    {(orderedItem[0].price * orderedItem[0].orderQty).toFixed(
                      2,
                    )}
                  </span>
                </p>
              </div>
              <button onClick={handleDeleteCart}>
                <img src={generalIcons.deleteIcon} alt="Delete icon" />
              </button>
            </div>
            <button className="preset-3-b text-grey-950 bg-orange-500 w-full py-4 rounded-[10px]">
              Checkout
            </button>
          </>
        ) : (
          <p className="pt-12">Your Cart is empty.</p>
        )}
      </article>
    </aside>
  );
}
