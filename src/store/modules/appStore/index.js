import actions from './actions';
import mutations from './mutations';

const state = {
    isMenuOpen: false,
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};