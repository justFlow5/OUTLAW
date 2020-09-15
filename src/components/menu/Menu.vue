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
                    <ToggleMenuButton />
                    <MenuLogo />
                </div>
                <WatchCollection />
                <ReferenceLinks />
                <div class="padding"></div>
            </div>
        </transition>
    </div>
</template>

<script>
import WatchCollection from './WatchCollection';
import ToggleMenuButton from './ToggleMenuButton';
import ReferenceLinks from './ReferenceLinks';
import MenuLogo from './MenuLogo';

import { mapState, mapActions } from 'vuex';
export default {
    name: 'Menu',
    data() {
        return {};
    },
    components: { WatchCollection, ToggleMenuButton, ReferenceLinks, MenuLogo },

    computed: {
        ...mapState({
            isMenuOpen: (state) => state.appStore.isMenuOpen,
        }),
    },

    methods: {
        ...mapActions({
            toggleMenu: 'appStore/toggleMenu',
        }),
    },
};
</script>

<style lang="scss" scoped>
@import './menu-transition.scss';
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

.sidebar-header {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 10px 50px 50px;

    @media (min-width: $laptop) {
        margin: 40px 50px 50px;
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
</style>
