export default {
    ADD_PRODUCT_TO_CART(state, data) {
        state.cart = data;
    },

    ADD_PRODUCT_TO_WISHLIST(state, data) {
        state.wishlist = [...state.wishlist, data];
    },

    REMOVE_PRODUCT_FROM_WISHLIST(state, data) {
        state.wishlist = data;
    },
};
