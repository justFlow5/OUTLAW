export default {
    toggleMenu(context) {
        context.commit('TOGGLE_MENU');
    },

    toggleSearch(context) {
        context.commit('TOGGLE_SEARCH');
    },

    toggleCart(context) {
        context.commit('TOGGLE_CART');
    },

    toggleNavbarTheme(context, data) {
        context.commit('TOGGLE_NAVBAR', data);
    },

    changeCurrentView(context, data) {
        context.commit('CHANGE_CURRENT_VIEW', data);
    },

    addProductToCart(context, data) {
        context.commit('ADD_PRODUCT_TO_CART', data);
    },
};
