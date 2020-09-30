<template>
    <div class="search-container">
        <div
            class="overlay"
            :class="{ open: isSearchOpen }"
            @click="toggleSearch"
        ></div>

        <transition name="slide">
            <div v-if="isSearchOpen" class="search-panel">
                <div class="exit-button-container" @click="toggleSearch">
                    <ExitButton type="dark" />
                </div>
                <div class="logo-container">
                    <Logo />
                </div>

                <div class="searching-section">
                    <SearchHeading>Search the Banitz website</SearchHeading>
                    <div class="input-container">
                        <SearchInput />
                        <ConfirmSearchButton />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import SearchInput from './SearchInput';
import SearchHeading from './SearchHeading';
import ConfirmSearchButton from './ConfirmSearchButton';
import ExitButton from '../ExitButton';
import Logo from '../Logo-v2';

import { mapState, mapActions } from 'vuex';

export default {
    name: 'Search',

    computed: {
        ...mapState({
            isSearchOpen: (state) => state.appStore.isSearchOpen,
        }),
    },

    methods: {
        ...mapActions({
            toggleSearch: 'appStore/toggleSearch',
        }),
    },

    components: {
        SearchInput,
        SearchHeading,
        ConfirmSearchButton,
        ExitButton,
        Logo,
    },
};
</script>

<style lang="scss" scoped>
@import './search-transition.scss';
@import '../../styles/overlay.scss';
.search-panel {
    background: rgb(248, 248, 248);
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 998;
    position: fixed;
    padding: 20px 15px;
    top: 0;

    @media (min-width: $laptop) {
        padding: 20px 40px;
    }
}

.exit-button-container {
    right: 5px;
    top: -15px;
    padding: 20px;
    position: absolute;
    z-index: 20;

    @media (min-width: $laptop) {
        right: 50px;
        top: 50px;
    }
}

.searching-section {
    position: relative;

    padding: 60px 0vw;
    width: 100%;

    @media (min-width: $mobileL) {
        padding: 60px 5vw;
        width: 90%;
    }

    @media (min-width: $tablet) {
        padding: 60px 5vw;
        width: 80%;
    }

    @media (min-width: $laptop) {
        padding: 60px 10vw;
        width: 70%;
    }
}

.input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
}

.input-wrapper {
    position: relative;
    width: 100%;
}
</style>
