export default {
    addProductToCart({ state, commit }, data) {
        const newWatch = { ...data };
        let productModified = false;
        if (state.cart.length > 0) {
            const updatedCart = state.cart.map((watch) => {
                if (watch.name === newWatch.name) {
                    productModified = true;
                    const quantity = watch.quantity + newWatch.quantity;
                    return { ...watch, quantity };
                } else {
                    return watch;
                }
            });
            if (productModified) commit('ADD_PRODUCT_TO_CART', updatedCart);
            else commit('ADD_PRODUCT_TO_CART', [...state.cart, newWatch]);
        } else {
            commit('ADD_PRODUCT_TO_CART', [newWatch]);
        }
    },

    addProductToWishlist({ commit }, watch) {
        commit('ADD_PRODUCT_TO_WISHLIST', watch);
    },

    removeProductFromCart({ commit, state }, watchName) {
        const updatedCart = state.cart.filter(
            (watch) => watch.name !== watchName
        );
        commit('ADD_PRODUCT_TO_CART', updatedCart);
    },
};
