<template>
    <div>
        <div class="section-container">
            <Navbar />
            <Menu />
            <Search />
            <Cart />

            <div class="content-container">
                <div class="overlay"></div>
                <div class="title-wrapper" :class="{ 'slide-down': dropText }">
                    <h1 class="title">
                        <span>The new</span>
                        <span>Speedmaster</span>
                    </h1>
                    <h2 class="subtitle">Conquering the world</h2>
                </div>
            </div>
            <div class="video-container">
                <video autoplay muted loop>
                    <source :src="src" type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar';
import Menu from '../components/menu/Menu';
import Search from '../components/search/Search';
import Cart from '../components/cart/Cart';

import { mapState, mapActions } from 'vuex';

export default {
    name: 'Dashboard',
    components: {
        Navbar,
        Menu,
        Search,
        Cart,
    },
    data() {
        return {
            timer: 35,
            dropText: false,
            src: '',
        };
    },
    methods: {
        ...mapActions({
            toggleMenu: 'appStore/toggleMenu',
        }),

        getVideoPath(watch) {
            return require('../assets/watchVideo/' + watch);
        },

        setVideoPath() {
            if (window.matchMedia('(orientation: portrait)').matches) {
                this.src = this.getVideoPath('mobile-rolex.webm');
            } else if (window.matchMedia('(orientation: landscape)').matches) {
                this.src = this.getVideoPath('omega2.mp4');
            }
        },
    },
    mounted() {
        this.setVideoPath();
    },

    created() {
        setInterval(() => {
            if (this.timer === 10) {
                this.dropText = true;
            } else if (this.timer === 0) {
                this.dropText = false;
                this.timer = 35;
            }
            this.timer--;
        }, 1000);
    },

    computed: {
        ...mapState({
            isMenuOpen: (state) => state.appStore.isMenuOpen,
            isSearchOpen: (state) => state.appStore.isSearchOpen,
            isCartOpen: (state) => state.appStore.isCartOpen,
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
};
</script>

<style lang="scss" scoped>
.section-container {
    width: 100vw;
    height: 100vh;
    position: relative;
    & .video-container {
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: hidden;

        & > video {
            position: relative;
            width: 100%;
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    & .content-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;

        & .title-wrapper {
            position: relative;
            color: white;
            text-transform: uppercase;
            z-index: 999;
            transition: transform 5s ease-in-out;
            &.slide-down {
                transform: translateY(250px);
            }

            & span {
                position: relative;
                font-size: 28px;
                letter-spacing: 4.5px;
                font-weight: 400;
                z-index: 100;
                display: block;

                @media (min-width: $mobileL) {
                    font-size: 36px;
                }

                @media (min-width: $laptop) {
                    font-size: 56px;
                }
            }

            & .subtitle {
                margin-top: 20px;
                font-size: 17px;
                position: relative;
                font-weight: 300;
                letter-spacing: 2.5px;

                @media (min-width: $mobileL) {
                    font-size: 21px;
                }

                @media (min-width: $laptop) {
                    margin-top: 30px;
                    font-size: 26px;
                }
            }
        }
    }

    & .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 3;
        background: rgba(0, 0, 0, 0.3);
    }
}
</style>
