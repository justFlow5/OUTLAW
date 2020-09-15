<template>
    <div class="sidebar">
        <div
            class="sidebar-backdrop"
            :class="{ open: isMenuOpen }"
            @click="toggleMenu"
        ></div>

        <transition name="slide">
            <div v-if="isMenuOpen" class="sidebar-panel">
                <div class="sidebar-header">
                    <button
                        class="leave-menu-button"
                        @click="toggleMenu"
                    ></button>

                    <div class="logo">
                        <div class="logo-image"></div>
                        <span>Banitz</span>
                    </div>
                </div>
                <ul class="watch-collection">
                    <li v-for="(watch, index) in watchesData" :key="index">
                        <WatchTemplate :watchData="watch" />
                    </li>
                    <div class="spacing"></div>
                </ul>

                <section class="references">
                    <ul class="references-container">
                        <li><a>Banitz watches</a></li>
                        <li>
                            <a>New watches {{ new Date().getFullYear() }}</a>
                        </li>
                        <li><a>Clients favourites</a></li>
                        <li><a>Configure your watch</a></li>
                        <li><a>History & watchmaking</a></li>
                    </ul>

                    <ul class="references-container">
                        <li><a>Find a retailer</a></li>
                        <li><a>Watch care & service</a></li>
                    </ul>
                </section>

                <div class="padding"></div>
            </div>
        </transition>
    </div>
</template>

<script>
import WatchTemplate from './Watch-template';
import { watches } from '../../assets/watchesData/watchesData';
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Menu',
    data() {
        return {};
    },
    components: { WatchTemplate },

    computed: {
        ...mapState({
            isMenuOpen: (state) => state.appStore.isMenuOpen,
        }),
        watchesData: function() {
            return watches;
        },
    },

    methods: {
        ...mapActions({
            toggleMenu: 'appStore/toggleMenu',
        }),
    },
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
    transition: transform 0.5s cubic-bezier(0.75, 0.11, 0.49, 1) 0.3s,
        opacity 0.3s cubic-bezier(0.75, 0.11, 0.49, 1) 0.4s;
}

.slide-leave-active {
    transition: transform 0.5s ease-in 0.3s, opacity 0.3s ease-in 0.4s;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67),
        opacity 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

.sidebar-backdrop {
    background-color: transparent;
    z-index: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    transition: background-color 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0.3s;

    &.open {
        z-index: 999;
        cursor: pointer;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
    }
}

.sidebar-panel {
    position: relative;
    overflow-y: auto;
    background: rgb(33, 33, 33);
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    /* padding: 20px 0; */
    width: 90vw;
    /* padding-bottom: 60px; */
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

.leave-menu-button {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px;
    width: 20px;
    height: 20px;
    outline: none;
    cursor: pointer;
    border: none;
    background-color: transparent;

    position: fixed;
    left: 0;
    top: 10px;

    @media (min-width: $laptop) {
        position: absolute;
        top: unset;
        left: 0;
        bottom: 0;
    }

    &:hover::before,
    &:hover::after {
        background-color: #daa520;
    }

    &::before,
    &::after {
        content: '';
        width: 20px;
        border-radius: 2px;
        display: block;
        height: 2px;
        position: absolute;
        background-color: rgb(255, 255, 255);
        transition: background-color 0.2s;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
}

.sidebar-header {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 10px 50px 50px;

    @media (min-width: $laptop) {
        margin: 40px 50px 50px;
    }
}

.logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    padding-top: 5px;
    pointer-events: none;

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
        transition: all 0.3s;

        @media (min-width: $laptop) {
            width: 55px;
            height: 55px;
        }
    }
}

.watch-collection {
    position: relative;
    /* height: 200px; */
    /* white-space: nowrap; */
    overflow: scroll hidden;
    /* overflow: hidden; */
    display: flex;
    /* flex-wrap: nowrap; */
    position: relative;
    height: 280px;

    margin: 0 70px;
    scrollbar-width: thin;
    scrollbar-color: white rgba(255, 255, 255, 0.2);
    scroll-margin: 0px 0px 90px;

    margin: 0 10px;
    @media (min-width: $tablet) {
        height: 290px;
    }

    @media (min-width: $laptop) {
        margin: 0 70px;
    }

    & li {
        list-style-type: none;
        height: 95%;
        position: relative;
    }
    &::-webkit-scrollbar {
        /* margin-top: 40px; */

        /* background-color: rgb(33, 33, 33);
        height: 47px; */

        width: 4px;
        height: 5px;
        padding: 5px 0;
        cursor: pointer;
        transition: all 0.2s;
    }
    &::-webkit-scrollbar-track {
        position: relative;
        background: rgba(255, 255, 255, 0.2);
    }

    &::-webkit-scrollbar-thumb {
        background-color: white;

        border-radius: 4px;

        &:active {
            background: rgba(255, 255, 255, 0.4);
        }
        &:hover {
            background: rgba(255, 255, 255, 0.7);
        }
    }

    & ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
        display: none;
    }
    & ::-webkit-scrollbar-corner {
        background-color: transparent;
    }
    /* 
    & * {
        cursor: pointer;
        position: relative;
        min-height: 200px;
        min-width: 170px;
        background: coral;
        margin: 5px;
        border: 1px solid black;
        margin-bottom: 40px;
    } */
}

.references {
    margin: 10px 15px;

    @media (min-width: $laptop) {
        margin: 30px 70px;
    }

    & .references-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        list-style-type: none;
        padding: 30px 0;

        &:last-child {
            /* margin: 20px 0; */
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        & li {
            margin-top: 20px;
            font-family: 'PT Serif', serif;
            font-size: 18px;
            color: white;
            font-weight: 500;
            cursor: pointer;
            text-align: left;
            transition: color 0.3s;

            @media (min-width: $tablet) {
                font-weight: 600;
            }

            &:first-child {
                margin-top: unset;
            }

            &:hover {
                color: #daa520;
            }
        }
    }
}

.padding {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 30px;
    width: 90vw;
    background: rgb(33, 33, 33);

    @media (min-width: $tablet) {
        width: 70vw;
    }
    @media (min-width: $laptop) {
        width: 50vw;
    }
}

.spacing {
    pointer-events: none;
    height: 10px;
    background: transparent;
    outline: none;
    border: 0;
}
</style>
