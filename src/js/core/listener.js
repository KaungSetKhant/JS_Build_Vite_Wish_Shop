import { cartItemGroupHandler } from "../app/cart.js";
import { categoryGroupHandler } from "../app/category.js";
import { productGroupHandler } from "../app/product.js";
import { cartItemGroup, categoryGroup, productGroup } from "./selectors.js";

const listener = () => {
  categoryGroup.addEventListener("click", categoryGroupHandler);
  productGroup.addEventListener("click", productGroupHandler);
  cartItemGroup.addEventListener("click",cartItemGroupHandler);
 
};

export default listener;
