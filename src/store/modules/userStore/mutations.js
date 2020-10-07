export default {
    ADD_PRODUCT_TO_CART(state, data) {
        state.cart = data;
    },

    ADD_PRODUCT_TO_WISHLIST(state, data) {
        state.wishlist = [...state.wishlist, data];
    },
};
