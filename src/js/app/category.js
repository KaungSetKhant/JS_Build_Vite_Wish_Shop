import { products } from "../core/data.js";
import { categoryGroup, categoryTemplate } from "../core/selectors.js";
import { renderProduct } from "./product.js";

export const createCategory = (categoryName) => {
  const template = categoryTemplate.content.cloneNode(true);
  template.querySelector(".cat-btn").innerText = categoryName;
  return template;
};

export const renderCategory = (categories) => {
  categories.forEach((cat) => categoryGroup.append(createCategory(cat)));
};

export const categoryGroupHandler = (event) => {
  if (event.target.classList.contains("cat-btn")) {
    const currentCategoryBtn = event.target;
    document.querySelector(".cat-btn.active")?.classList.remove("active");
    currentCategoryBtn.classList.add("active");

    const currentCategory = event.target.innerText;
    // console.log(currentCategory);
    renderProduct(products.filter((el) => el.category === currentCategory || currentCategory === "All"));
  }
};
