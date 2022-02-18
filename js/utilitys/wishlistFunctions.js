export function getExistingWishlist() {
    const wishlist = localStorage.getItem("wishes");
    console.log(wishlist)

    if (wishlist === null) {
        return [];
    } else {
        return JSON.parse(wishlist);
    }
}