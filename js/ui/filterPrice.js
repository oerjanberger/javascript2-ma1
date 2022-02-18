import { createHtml } from "./createHtml.js";

export default function filterPrice(productsToFilter) {
    const priceFilter = document.querySelector(".filter__price");
    const searchMessage = document.querySelector(".search__message");

    priceFilter.onkeyup = function (event) {
        const filterValue = event.target.value.trim();
        searchMessage.style.display = "block"

        if (!filterValue) {
            searchMessage.style.display = "none"
        }

        const filteredProducts = productsToFilter.filter(function (product) {

            if (parseFloat(product.price) <= parseFloat(filterValue) || filterValue === "") {
                searchMessage.style.display = "none"
                return true;
            }
            else {
                searchMessage.innerHTML = `<h4>Could not find a product cheaper then ${filterValue}$</h4>`
            }

        });
        console.log(filteredProducts)

        createHtml(filteredProducts);
    };
}