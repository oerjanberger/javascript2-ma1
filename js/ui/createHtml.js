import { getExistingWishlist } from "../utilitys/wishlistFunctions.js";
import { clickEvent } from "../utilitys/clickEvent.js";

export function createHtml(productsToRender) {
    const productContainer = document.querySelector(".product__container");
    productContainer.innerHTML = "";
    const wishlist = getExistingWishlist();

    productsToRender.forEach(function (products) {
        let cssClass = "fa-clipboard";

        const doesProductExist = wishlist.find(function (wishes) {
            return parseInt(wishes.id) === products.id;
        });

        if (doesProductExist) {
            cssClass = "fa-clipboard-check";
        }
        productContainer.innerHTML += `
        <div class="products">
            <h3>${products.title}</h3>
            <p>Price: ${products.price}$</p>
            <i class="fas ${cssClass}" data-id="${products.id}" data-title="${products.title}" data-price="${products.price}"></i>
        </div>
        `
    });

    const wishlistButton = document.querySelectorAll(".products i");

    wishlistButton.forEach((button) => {
        button.addEventListener("click", clickEvent);
    });


}