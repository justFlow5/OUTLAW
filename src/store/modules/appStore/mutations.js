export default {
    TOGGLE_MENU(state) {
        state.isMenuOpen = !state.isMenuOpen;
    },

    TOGGLE_SEARCH(state) {
        state.isSearchOpen = !state.isSearchOpen;
    },

    TOGGLE_CART(state) {
        state.isCartOpen = !state.isCartOpen;
    },

    TOGGLE_NAVBAR(state, data) {
        state.isNavbarVisibleAtTop = data;
    },

    CHANGE_CURRENT_VIEW(state, payload) {
        state.currentView = payload;
    },

    ADD_PRODUCT_TO_CART(state, data) {
        state.cart = [...state.cart, data];
    },
};
