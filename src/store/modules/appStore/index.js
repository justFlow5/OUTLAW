import actions from './actions';
import mutations from './mutations';

const state = {
    isMenuOpen: false,
    isSearchOpen: false,
    isCartOpen: false,
    isNavbarVisibleAtTop: false,
    currentView: '',
    cart: [],
    wishlist: [],
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
