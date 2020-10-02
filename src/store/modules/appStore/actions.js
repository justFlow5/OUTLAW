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

    toggleNavbarTheme(context) {
        context.commit('TOGGLE_NAVBAR');
    },

    changeCurrentView(context, data) {
        context.commit('CHANGE_CURRENT_VIEW', data);
    },
};