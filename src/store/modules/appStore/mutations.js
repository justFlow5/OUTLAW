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
};
