import { renderCategory } from "../app/category.js";
import { renderProduct } from "../app/product.js";
import { categories, products } from "./data.js";

const initialRender = () => {
  renderCategory(categories);
  renderProduct(products);
};

export default initialRender;
