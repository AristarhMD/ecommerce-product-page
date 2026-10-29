import { useContext, useState } from "react";
import { products, generalIcons } from "../../data/data";
import { DataContext } from "../DataContext";

export default function Content() {
  const [selectedQty, setSelectedQty] = useState(0);
  const { setOrderedItem } = useContext(DataContext);
  const {
    id,
    company,
    header,
    productDescription,
    price,
    oldPrice,
    imagesThumbnail,
  } = products[0];

  const handleMinusQty = () => {
    selectedQty === 0 ? setSelectedQty(0) : setSelectedQty((prev) => prev - 1);
  };

  const handlePlusQty = () => setSelectedQty((prev) => prev + 1);

  const handleToCart = () => {
    let curretOrder = {
      id: id,
      header: header,
      orderQty: selectedQty,
      price: price,
      imagesThumbnail: imagesThumbnail,
    };

    setOrderedItem((prev) => {
      if (prev.length === 0) return [{ ...curretOrder }];

      let updatedInfo = prev.map((product) =>
        product.id === id
          ? { ...product, orderQty: selectedQty }
          : { ...curretOrder },
      );

      return updatedInfo;
    });
    setSelectedQty(0);
  };

  return (
    <div className="mx-auto w-[87.2%] mt-6 md:mt-12 md:w-full md:flex md:flex-col gap-6">
      {/* Product Description */}
      <p className="preset-6 md:preset-5 text-grey-500 uppercase">{company}</p>
      <h1 className="preset-2 md:preset-1 text-grey-950 my-4 md:my-0">
        {header}
      </h1>
      <p className="preset-4 md:preset-3-r text-grey-500">
        {productDescription}
      </p>

      {/* Price */}
      <div className="flex md:flex-col justify-between md:gap-2 my-8 md:my-0   ">
        <p className=" flex gap-4 md:gap-6 preset-2 text-grey-950 items-center">
          ${price}
          <span className="bg-grey-950 px-2 preset-3-b text-white rounded-md">
            50%
          </span>
        </p>
        <p className="preset-3-b text-grey-500 line-through">${oldPrice}</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:w-full">
        {/* Cart qty increasing */}
        <div className="flex items-center justify-between p-4 bg-grey-50 rounded-[10px] md:w-full xl:basis-1/2">
          <button onClick={handleMinusQty}>
            <img src={generalIcons.minusIcon} alt="Decrease order qty" />
          </button>
          <p className="preset-3-b text-grey-950">{selectedQty}</p>
          <button onClick={handlePlusQty}>
            <img src={generalIcons.plusIcon} alt="Increase order qty" />
          </button>
        </div>

        {/* Cart ordering */}
        <button
          className="flex items-center justify-center gap-4 py-4 bg-orange-500 rounded-[10px] preset-3-b text-grey-950 shadow-addCart md:w-full"
          onClick={handleToCart}
        >
          <img
            src={generalIcons.cartIcon}
            alt="Cart Icon"
            className="filter-[brightness(0)_invert(0%)_sepia(100%)_saturate(100%)_hue-rotate(355deg)_brightness(87%)_contrast(114%)]"
          />
          Add to cart
        </button>
      </div>
    </div>
  );
}
