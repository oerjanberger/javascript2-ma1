import { getExistingWishlist } from "./utilitys/wishlistFunctions.js";

const wishlist = getExistingWishlist();

const productContainer = document.querySelector(".product__container");

if (wishlist.length === 0) {
    productContainer.innerHTML = `<p class="wishlistMessage">You have not added any products to your wishlist</p>`
};

wishlist.forEach((wishes) => {
    productContainer.innerHTML += `
        <div class="products product${wishes.id}">
            <h3>${wishes.title}</h3>
            <p>Price: ${wishes.price}$</p>
            <i class="fas fa-clipboard-check" data-id="${wishes.id}" data-title="${wishes.title}" data-price="${wishes.price}"></i>
        </div>
        `;
});

const wishlistButton = document.querySelectorAll(".products i");

wishlistButton.forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const id = this.dataset.id;
        const title = this.dataset.title;
        const price = this.dataset.price;

        const productId = document.querySelector(`.product${id}`)
        productId.style.display = "none"

        const currentWishes = getExistingWishlist();

        const productExisits = currentWishes.find(function (wishes) {
            return wishes.id === id;
        });

        if (productExisits === undefined) {
            const product = { id: id, title: title, price: price };
            currentWishes.push(product);
            saveWishes(currentWishes);
        }
        else {
            const newWish = currentWishes.filter((wishes) => wishes.id !== id);
            saveWishes(newWish)
        }

        function saveWishes(wishes) {
            localStorage.setItem("wishes", JSON.stringify(wishes));
        }

    });
});


