import { getExistingWishlist } from "./wishlistFunctions.js";

export function clickEvent() {
    this.classList.toggle("fa-clipboard");
    this.classList.toggle("fa-clipboard-check");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;

    const currentWishes = getExistingWishlist();

    const productExisits = currentWishes.find(function (wishes) {
        return wishes.id === id;
    });

    if (productExisits === undefined) {
        const product = { id: id, title: title, price: price };
        currentWishes.push(product);
        saveWishes(currentWishes);
    } else {
        const newWish = currentWishes.filter((wishes) => wishes.id !== id);
        saveWishes(newWish)
    }

    function saveWishes(wishes) {
        localStorage.setItem("wishes", JSON.stringify(wishes));
    }
}
