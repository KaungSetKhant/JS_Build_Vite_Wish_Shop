import Swal from "sweetalert2";
import { cartCount, cartItemTemplate, cartTotal, countItem, productGroup } from "../core/selectors.js"

export const creatCartItem = (product,quantity) => {
    const template = cartItemTemplate.content.cloneNode(true);
    template.querySelector(".cart-item").setAttribute("cart-product-id", product.id);
    template.querySelector(".cart-item-img").src = product.image;
    template.querySelector(".cart-item-title").innerText = product.title;
    template.querySelector(".cart-item-price").innerText = product.price;
    template.querySelector(".cart-item-cost").innerText = product.price * quantity;
    template.querySelector(".cart-quantity").innerText = quantity;
    return template;
}

export const countCartItem = () => {
    const totalItemCart = document.querySelectorAll(".cart-item");
    return totalItemCart.length;
}

export const updateCountCartItem = () => {
    const totalCountItem = countCartItem();
    countItem.innerText = totalCountItem;
    cartCount.innerText = totalCountItem;
}

export const calculateCartCostTotal = () => {
    const total = [...document.querySelectorAll(".cart-item-cost")].reduce((pv,cv) => pv + parseFloat(cv.innerText), 0);
    return total;
}

export const updateCartTotal = () => {
    const total = calculateCartCostTotal().toFixed(2);
    cartTotal.innerText = total;
}

export const cartItemGroupHandler = (event) => {
    if(event.target.classList.contains("cart-item-remove")){
        const currentCart = event.target.closest(".cart-item");
        const currentProductId = currentCart.getAttribute("cart-product-id");

        

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             currentCart.remove();
             updateCountCartItem();
             updateCartTotal();

             const currentProduct = productGroup.querySelector(`[product-id='${currentProductId}']`);
             if(currentProduct){
                const currentProductAddCartBtn = currentProduct.querySelector(".product-add-cat-btn");
                currentProductAddCartBtn.removeAttribute("disabled");
                currentProductAddCartBtn.innerText = "Add to Cart";
             }
            }
          });
    }else if(event.target.classList.contains("cart-q-add")){
        const currentCart = event.target.closest(".cart-item");
        const currentCost = currentCart.querySelector(".cart-item-cost");
        const currentPrice = currentCart.querySelector(".cart-item-price");
        const currentQuantity = currentCart.querySelector(".cart-quantity");

        currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;
        currentCost.innerText = (currentQuantity.innerText * currentPrice.innerText).toFixed(2);
        updateCartTotal();

        console.log("q add");
    }else if(event.target.classList.contains("cart-q-sub")){
        const currentCart = event.target.closest(".cart-item");
        const currentCost = currentCart.querySelector(".cart-item-cost");
        const currentPrice = currentCart.querySelector(".cart-item-price");
        const currentQuantity = currentCart.querySelector(".cart-quantity");

       if(currentQuantity.innerText > 1){
        currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
        currentCost.innerText = (currentQuantity.innerText * currentPrice.innerText).toFixed(2);
        updateCartTotal();
       }

        console.log("q-sub");
    }
}