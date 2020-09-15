<template>
    <div>
        <div
            class="overlay"
            :class="{ open: isCartOpen }"
            @click="toggleCart"
        ></div>

        <transition name="slide">
            <div v-if="isCartOpen" class="cart-panel">
                <div class="cart-content-section">
                    <div class="exit-button-container" @click="toggleCart">
                        <ExitButton type="dark" />
                    </div>
                    <CartHeading>Your Selection</CartHeading>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ExitButton from '../ExitButton';
import CartHeading from './CartHeading';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Cart',

    computed: {
        ...mapState({
            isCartOpen: (state) => state.appStore.isCartOpen,
        }),
    },

    methods: {
        ...mapActions({
            toggleCart: 'appStore/toggleCart',
        }),
    },

    components: {
        ExitButton,
        CartHeading,
    },
};
</script>

<style lang="scss" scoped>
@import './cart-transition.scss';
@import '../../styles/overlay.scss';

.cart-panel {
    overflow-y: auto;
    background: rgb(248, 248, 248);
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    width: 90vw;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: $tablet) {
        width: 70vw;
    }
    @media (min-width: $laptop) {
        width: 50vw;
    }
}

.cart-content-section {
    position: relative;
    margin: 85px 10% 40px 15px;

    @media (min-width: $mobileL) {
        margin: 95px 10% 40px 40px;
    }

    @media (min-width: $laptop) {
        margin: 105px 10% 40px 70px;
    }
}

.exit-button-container {
    position: fixed;
    top: 20px;
    right: 20px;

    @media (min-width: $laptop) {
        position: absolute;
        top: -100%;
        right: 20px;
    }
}
</style>
