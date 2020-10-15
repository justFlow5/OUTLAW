// import { uuid } from 'vue-uuid';

export default {
    addProductToCart({ state, commit }, data) {
        const newWatch = {
            ...data,
        };
        const cartCopy = [...state.cart];

        const foundIndex = cartCopy.findIndex(
            (watch) => watch.id === newWatch.id
        );
        if (foundIndex === -1) {
            commit('ADD_PRODUCT_TO_CART', [...state.cart, newWatch]);
            return;
        }

        let flag = false;

        cartCopy.forEach((watch, index) => {
            if (watch.id === newWatch.id) {
                if (watch.bSize === newWatch.bSize) {
                    cartCopy[index].quantity += newWatch.quantity;

                    flag = true;
                }
            }
        });
        if (!flag) {
            commit('ADD_PRODUCT_TO_CART', [...state.cart, newWatch]);
            return;
        }

        commit('ADD_PRODUCT_TO_CART', cartCopy);
    },

    removeProductFromCart({ commit, state }, id) {
        const updatedCart = state.cart.filter((watch) => watch.id !== id);
        commit('ADD_PRODUCT_TO_CART', updatedCart);
    },

    addProductToWishlist({ commit, getters, dispatch }, watch) {
        const newWatch = { ...watch };
        if (!getters.isInWishlist(newWatch.id)) {
            commit('ADD_PRODUCT_TO_WISHLIST', newWatch);
        } else dispatch('removeProductFromWishlist', newWatch.id);
    },

    removeProductFromWishlist({ commit, state }, watchId) {
        const updatedWishlist = state.wishlist.filter((watch) => {
            return watch.id !== watchId;
        });
        commit('REMOVE_PRODUCT_FROM_WISHLIST', updatedWishlist);
    },
};
