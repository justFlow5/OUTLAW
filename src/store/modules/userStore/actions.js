import { uuid } from 'vue-uuid';

export default {
    addProductToCart({ state, commit }, data) {
        const newWatch = {
            ...data,
        };
        let productModified = false;
        if (state.cart.length > 0) {
            const updatedCart = state.cart.map((watch) => {
                if (watch.id === newWatch.id) {
                    // check if it's the same bracelet size
                    productModified = true;
                    if (watch.bSize && watch.bSize === newWatch.bSize) {
                        const quantity = watch.quantity + newWatch.quantity;
                        return {
                            ...watch,
                            quantity,
                        };
                    } else {
                        const newId = uuid.v4();
                        const bwatch = {
                            ...watch,
                            id: newId,
                        };
                        console.log('HEY NEW ID WHAS UP: ');
                        console.log('watch id: ', watch.id);
                        console.log('new id: ', newId);
                        console.log('new watch id: ', bwatch.id);

                        console.log();
                        return {
                            ...watch,
                            id: newId,
                        };
                    }
                } else {
                    return watch;
                }
            });
            if (productModified) {
                commit('ADD_PRODUCT_TO_CART', updatedCart);
            } else {
                commit('ADD_PRODUCT_TO_CART', [...state.cart, newWatch]);
            }
        } else {
            commit('ADD_PRODUCT_TO_CART', [newWatch]);
        }
    },

    addProductToWishlist({ commit }, watch) {
        commit('ADD_PRODUCT_TO_WISHLIST', watch);
    },

    removeProductFromCart({ commit, state }, watchId) {
        const updatedCart = state.cart.filter((watch) => watch.id !== watchId);

        // localStorage.setItem('cart', JSON.stringify(updatedCart))

        commit('ADD_PRODUCT_TO_CART', updatedCart);
    },
};
