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

    changeCurrentView(commit, watch) {
        commit('CHANGE_CURRENT_VIEW', watch);
    },

    addProductToCart(context, watch) {
        context.commit('ADD_PRODUCT_TO_CART', watch);
    },
};
