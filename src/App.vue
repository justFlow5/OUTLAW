<template>
    <div id="app">
        <Navbar />
        <router-view />
        <SubscribePanel />
        <SharePanel />
        <Footer />
    </div>
</template>

<script>
import Navbar from './components/navbar/NavbarDeep';
import Footer from './components/footer/Footer';
import SubscribePanel from './components//subscribePanel/SubscribePanel';
import SharePanel from './components//sharePanel/SharePanel';

import { mapState, mapActions } from 'vuex';
export default {
    name: 'App',
    components: {
        Navbar,
        SharePanel,
        SubscribePanel,
        Footer,
    },

    computed: {
        ...mapState({
            isMenuOpen: (state) => state.appStore.isMenuOpen,
            isSearchOpen: (state) => state.appStore.isSearchOpen,
            isCartOpen: (state) => state.appStore.isCartOpen,
        }),
    },

    methods: {
        ...mapActions({
            addProductToCart: 'userStore/addProductToCart',
            addProductToWishlist: 'userStore/addProductToWishlist',
        }),
    },

    watch: {
        isMenuOpen: function() {
            if (this.isMenuOpen) {
                document.documentElement.style.overflow = 'hidden';
                return;
            }
            document.documentElement.style.overflow = 'auto';
        },

        isSearchOpen: function() {
            if (this.isSearchOpen) {
                document.documentElement.style.overflow = 'hidden';
                return;
            }
            document.documentElement.style.overflow = 'auto';
        },

        isCartOpen: function() {
            if (this.isCartOpen) {
                document.documentElement.style.overflow = 'hidden';
                return;
            }
            document.documentElement.style.overflow = 'auto';
        },
    },

    mounted() {
        const data = JSON.parse(localStorage.getItem('cartContent'));
        let cart = [];
        let wishlist = [];
        if (data && data.cart) cart = data.cart;
        if (data && data.wishlist) wishlist = data.wishlist;
        cart.length > 0 && this.addProductToCart(cart);
        wishlist.length > 0 && this.addProductToWishlist(wishlist);
    },
};
</script>

<style lang="scss">
@import './styles/reset.scss';

html {
    scroll-behavior: smooth;
}
#app {
    font-family: Quicksand, 'Lato', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(33, 33, 33);
    /* overflow-x: hidden; */
}

button {
    outline: none;
}

ul {
    list-style-type: none;
}
</style>
