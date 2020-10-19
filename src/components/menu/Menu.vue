<template>
    <div class="sidebar">
        <div
            class="overlay"
            :class="{ open: isMenuOpen }"
            @click="toggleMenu"
        ></div>

        <transition name="slide">
            <div v-if="isMenuOpen" class="sidebar-panel">
                <div class="sidebar-header">
                    <div class="exit-button-container" @click="toggleMenu">
                        <ExitButton />
                    </div>
                    <Logo :lightTheme="false" />
                </div>
                <WatchesMenuGallery />
                <ReferenceLinks />
                <div class="padding"></div>
            </div>
        </transition>
    </div>
</template>

<script>
import WatchesMenuGallery from './Watches-Menu-Gallery';
import ExitButton from '../shared/ExitButton';
import Logo from '../shared/Logo';
import ReferenceLinks from './ReferenceLinks';

import { mapState, mapActions } from 'vuex';
export default {
    name: 'Menu',
    components: { WatchesMenuGallery, ExitButton, ReferenceLinks, Logo },

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
@import '../../styles/overlay.scss';

.sidebar-panel {
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

.exit-button-container {
    left: 0;
    top: 0;
    padding: 20px;
    position: fixed;

    @media (min-width: $laptop) {
        position: absolute;
        top: unset;
        left: 20px;
        bottom: 0;
    }
}
</style>
