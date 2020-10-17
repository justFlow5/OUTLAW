<template>
    <transition name="slide">
        <nav class="navbar" :class="navbarClassess">
            <div class="navbar-left">
                <div class="nav-item menu" @click="toggleMenu">
                    <CustomHamburger />
                    <span class="desktop-only">Menu</span>
                </div>

                <div class="nav-item desktop-only">
                    <router-link to="/contact">Contact</router-link>
                </div>
                <div class="nav-item desktop-only">Story of Banitz</div>
            </div>
            <div class="logo">
                <router-link to="/">
                    <div class="logo-image"></div>
                    <span>Banitz</span>
                </router-link>
            </div>
            <div class="navbar-right">
                <div class="nav-item search" @click="toggleSearch">
                    <SearchIcon />
                    <span class="desktop-only">Search</span>
                </div>

                <div class="nav-item cart" @click="toggleCart">
                    <CartIcon />
                    <span class="desktop-only">Cart</span>
                </div>
            </div>
        </nav>
    </transition>
</template>

<script>
import CustomHamburger from './CustomHamburger';
import CartIcon from '../../assets/icons/Cart';
import SearchIcon from '../../assets/icons/Search';

import { mapState, mapActions } from 'vuex';

export default {
    name: 'Navbar',
    data() {
        return {
            showNavbar: true,
            lastScrollPosition: 0,
            onTop: true,
        };
    },

    computed: {
        ...mapState({
            isMenuOpen: (state) => state.appStore.isMenuOpen,
            isSearchOpen: (state) => state.appStore.isSearchOpen,
            isCartOpen: (state) => state.appStore.isCartOpen,
            isNavbarVisibleAtTop: (state) =>
                state.appStore.isNavbarVisibleAtTop,
        }),

        navbarClassess() {
            return {
                'navbar--hidden':
                    !this.showNavbar ||
                    this.isMenuOpen ||
                    this.isSearchOpen ||
                    this.isCartOpen,
                'navbar--shown': !this.onTop,
                'watch-spec': this.isNavbarVisibleAtTop,
                onTop: this.onTop,
            };
        },
    },
    methods: {
        ...mapActions({
            toggleMenu: 'appStore/toggleMenu',
            toggleSearch: 'appStore/toggleSearch',
            toggleCart: 'appStore/toggleCart',
        }),

        onScroll() {
            if (window.scrollY > 0) this.onTop = false;
            else this.onTop = true;

            // ---------------------------
            const currentScrollPosition =
                window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollPosition < 150) {
                return;
            }
            // Stop executing this function if the difference between
            // current scroll position and last scroll position is less than some offset
            if (
                Math.abs(currentScrollPosition - this.lastScrollPosition) < 20
            ) {
                return;
            }
            this.showNavbar = currentScrollPosition < this.lastScrollPosition;
            this.lastScrollPosition = currentScrollPosition;
        },
    },

    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },

    components: {
        CustomHamburger,
        CartIcon,
        SearchIcon,
    },
};
</script>

<style lang="scss" scoped>
.navbar {
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 6;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transform: translate3d(0, 0, 0);
    transition: 0.3s all ease-out;

    &.navbar--hidden {
        transform: translate3d(0, -100%, 0);
        transition: all 0.3s ease-in;
    }

    &:hover,
    &.watch-spec,
    &.navbar--shown {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);
        /* transition: all 0.3s ease-in 0.3s; */
        & .logo-image {
            background-image: url('../../assets/icons/logo-gold.png');
            transition: all 0.3s;
        }

        & .logo span {
            color: #252727;
            text-shadow: 1px 1px 1px rgba(218, 165, 32, 0.8);
        }
        & .nav-item {
            font-size: 17px;
            color: black;
            &.menu .menu-button span {
                background-color: rgb(0, 0, 0);
            }

            & svg {
                fill: rgb(0, 0, 0);
            }
        }
    }

    &.navbar--shown {
        height: 60px;

        & .logo-image {
            @media (min-width: $laptop) {
                width: 40px;
                height: 40px;
                padding-top: 10px;
            }

            & ~ span {
                font-size: 15px;
                @media (min-width: $laptop) {
                    font-size: 18px;
                    padding-bottom: 5px;
                }
            }
        }
        & .navbar-left,
        & .navbar-right {
            align-items: center;
            padding-bottom: 0px;
        }
    }

    &.onTop {
        & .logo span {
            font-size: 18px;
            @media (min-width: $mobileL) {
                font-size: 19px;
            }

            @media (min-width: $laptop) {
                font-size: 27px;
            }
        }

        & .logo-image {
            width: 37px;
            height: 37px;

            @media (min-width: $laptop) {
                width: 55px;
                height: 55px;
            }
        }

        & .nav-item {
            font-size: 19px;

            & svg {
                height: 22px;
                width: 22px;

                @media (min-width: $mobileL) {
                    width: 25px;
                    height: 25px;
                }

                @media (min-width: $laptop) {
                    width: 27px;
                    height: 27px;
                }
            }
        }
    }
    & .desktop-only {
        display: none;
        @media (min-width: $laptop) {
            display: inline-block;
        }
    }

    .navbar-left,
    .navbar-right {
        display: flex;
        @media (min-width: $laptop) {
            padding-bottom: 20px;
            align-items: flex-end;
        }
        & > .nav-item {
            padding: 0 8px;

            @media (min-width: $mobileL) {
                padding: 0 13px;
            }

            @media (min-width: $laptop) {
                padding: 0 20px;
            }
        }
    }

    .navbar-left {
        margin-left: 20px;

        @media (min-width: $laptop) {
            margin-left: 25px;
        }
        @media (min-width: $laptop) {
            margin-left: 40px;
        }
    }

    .navbar-right {
        margin-right: 20px;

        @media (min-width: $mobileL) {
            margin-right: 25px;
        }

        @media (min-width: $laptop) {
            margin-right: 40px;
        }
    }

    & .nav-item {
        font-size: 19px;
        font-weight: 600;
        color: white;
        position: relative;
        z-index: 2;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            color: #daa520;
            & svg {
                fill: #daa520;
            }
        }

        & svg {
            fill: white;
            transition: all 0.3s;
            height: 20px;
            width: 20px;

            @media (min-width: $mobileL) {
                width: 22px;
                height: 22px;
            }

            @media (min-width: $laptop) {
                width: 25px;
                height: 25px;
                /* margin-right: 4px; */
            }
        }
    }
}

.menu,
.search,
.cart {
    display: flex;
    justify-content: center;
    align-items: center;
    & span,
    & svg {
        margin-left: 8px;
    }
}

.logo {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    padding-top: 5px;
    cursor: pointer;

    & span {
        font-family: 'PT Serif', serif;
        color: white;
        letter-spacing: 1.4px;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 600;
        text-shadow: 0px 0px 0px transparent;
        transition: all 0.3s;

        @media (min-width: $mobileL) {
            font-size: 21px;
        }

        @media (min-width: $laptop) {
            font-size: 26px;
        }
    }

    & .logo-image {
        background-image: url('../../assets/icons/logo-white.png');
        width: 30px;
        height: 30px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        margin: 0 auto;
        transition: all 0.3s;

        @media (min-width: $laptop) {
            width: 50px;
            height: 50px;
        }
    }
}
</style>
