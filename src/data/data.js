import product1 from "../assets/images/image-product-1.jpg";
import product1T from "../assets/images/image-product-1-thumbnail.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product2T from "../assets/images/image-product-2-thumbnail.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product3T from "../assets/images/image-product-3-thumbnail.jpg";
import product4 from "../assets/images/image-product-4.jpg";
import product4T from "../assets/images/image-product-4-thumbnail.jpg";
import hamburgerIcon from "../assets/images/icon-menu.svg";
import logoIcon from "../assets/images/logo.svg";
import closeIcon from "../assets/images/icon-close.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import userAvatar from "../assets/images/image-avatar.png";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import nextIcon from "../assets/images/icon-next.svg";
import previousIcon from "../assets/images/icon-previous.svg";
import deleteIcon from "../assets/images/icon-delete.svg";

const products = [
  {
    id: "sneakker-001",
    price: "125.00",
    oldPrice: "250.00",
    company: "Sneaker Company",
    header: "Fall Limited Edition Sneakers",
    productDescription:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    images: [
      { src: product1, alt: "Sneaker front view" },
      { src: product2, alt: "Sneaker back view" },
      { src: product3, alt: "Sneaker top view" },
      { src: product4, alt: "Sneaker side view" },
    ],
    imagesThumbnail: [
      { src: product1T, alt: "Sneaker front view" },
      { src: product2T, alt: "Sneaker back view" },
      { src: product3T, alt: "Sneaker top view" },
      { src: product4T, alt: "Sneaker side view" },
    ],
  },
];

const generalIcons = {
  hamburgerIcon,
  logoIcon,
  closeIcon,
  cartIcon,
  userAvatar,
  minusIcon,
  plusIcon,
  nextIcon,
  previousIcon,
  deleteIcon,
};

export { products, generalIcons };
