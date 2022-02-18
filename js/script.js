import { url } from "./constants/settings.js";
import { createHtml } from "./ui/createHtml.js";
import filterPrice from "./ui/filterPrice.js";

async function getAPIResults() {
    try {
        const response = await fetch(url);
        const products = await response.json();
        console.log(products);
        createHtml(products);
        filterPrice(products);

    }
    catch (error) {
        console.log(error);
        const productContainer = document.querySelector(".product__container");
        productContainer.innerHTML = `<div class="errorMessage">${error}</div>`
    }
};
getAPIResults();


