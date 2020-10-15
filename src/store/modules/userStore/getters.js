export const getters = {
    isInWishlist: (state) => (id) =>
        state.wishlist.some((watch) => watch.id === id),
};
