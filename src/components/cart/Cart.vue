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
                    <div class="selection-container">
                        <div class="selection-categories">
                            <button
                                class="cart-button"
                                :class="{ active: activeSelection === 'cart' }"
                                @click="toggleActiveSelection('cart')"
                            >
                                Cart
                            </button>
                            <div class="seperator"></div>
                            <button
                                class="wishlist-button"
                                :class="{
                                    active: activeSelection === 'wishlist',
                                }"
                                @click="toggleActiveSelection('wishlist')"
                            >
                                Wishlist
                            </button>
                        </div>
                        <ul v-if="selectedData" class="cart-container">
                            <li
                                v-for="watch in selectedData"
                                :key="`${watch.bSize}${watch.id}`"
                                @click="changeCurrentView(watch)"
                            >
                                <router-link :to="formatPath(watch.name)">
                                    <SimplifiedWatch
                                        :watch="watch"
                                        :inCart="true"
                                        :isWishlist="
                                            activeSelection === 'wishlist'
                                        "
                                    />
                                    <span @click="onRemove(watch.id)"
                                        ><TrashCan
                                    /></span>
                                </router-link>
                            </li>
                        </ul>
                        <p v-else class="no-result">No results found</p>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ExitButton from '../ExitButton';
import CartHeading from './CartHeading';
import SimplifiedWatch from '../SimplifiedWatch';

import TrashCan from '../../assets/icons/Trash';

import { mapState, mapActions } from 'vuex';

export default {
    name: 'Cart',
    data() {
        return {
            activeSelection: 'cart',
        };
    },

    computed: {
        ...mapState({
            isCartOpen: (state) => state.appStore.isCartOpen,
            cart: (state) => state.userStore.cart,
            wishlist: (state) => state.userStore.wishlist,
        }),

        selectedData() {
            if (this.activeSelection === 'cart') return this.cart;
            else if (this.activeSelection === 'wishlist') return this.wishlist;
            else return [];
        },
    },

    methods: {
        ...mapActions({
            toggleCart: 'appStore/toggleCart',
            removeProductFromCart: 'userStore/removeProductFromCart',
            removeProductFromWishlist: 'userStore/removeProductFromWishlist',
            changeCurrentView: 'appStore/changeCurrentView',
        }),

        toggleActiveSelection(selection) {
            this.activeSelection = selection;
        },
        formatPath(watch) {
            return `/watches/${watch}`.replace(/\s/g, '-');
        },

        onRemove(watchId) {
            if (this.activeSelection === 'cart')
                this.removeProductFromCart(watchId);
            else if (this.activeSelection === 'wishlist')
                this.removeProductFromWishlist(watchId);
        },
    },

    components: {
        ExitButton,
        CartHeading,
        SimplifiedWatch,
        TrashCan,
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
        width: 75vw;
    }
    @media (min-width: $laptop) {
        width: 50vw;
    }
}

.cart-content-section {
    position: relative;
    margin: 85px 15px 40px 15px;

    @media (min-width: $mobileL) {
        margin: 95px 20px 40px 20px;
    }

    @media (min-width: $laptop) {
        margin: 105px 20px 40px 20px;
    }
}

.exit-button-container {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 20px;
    z-index: 1000;

    @media (min-width: $laptop) {
        position: fixed;
        top: 25px;
        right: 40px;
    }
}

.selection-container {
    display: flex;
    flex-direction: column;
}

.selection-categories {
    display: flex;
    margin: 15px 10px;
    position: relative;

    & button {
        font-size: 19px;
        background: transparent;

        cursor: pointer;
        color: #999999;
        text-transform: uppercase;
        transition: all 0.3s;

        &.active {
            color: #daa520;
        }
    }

    & .seperator {
        height: 25px;
        margin: 0 20px;

        border: 1px solid gray;
    }
}

.no-result {
    font-size: 25px;
    margin-top: 50px;
}

.cart-container {
    & li {
        background-color: transparent;
        padding: 10px;
        position: relative;
        display: inline-block;
        width: 100%;
        transition: all 0.3s;

        &:hover {
            background-color: #f1efef;
            cursor: pointer;
        }

        & svg {
            position: absolute;
            top: 5px;
            right: 5px;
            fill: #808080;
            width: 20px;
            height: 20px;
            transition: all 0.3s;

            &:hover {
                fill: #daa520;
            }
        }
    }
}
</style>
