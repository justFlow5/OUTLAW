import actions from './actions';
import mutations from './mutations';

const state = {
    isMenuOpen: false,
    isSearchOpen: false,
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};