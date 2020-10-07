import actions from './actions';
import mutations from './mutations';

const state = {

    wishlist: [],
    cart: [],
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};