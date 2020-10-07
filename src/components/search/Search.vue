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
                        <SearchInput
                            v-model="text"
                            :text="text"
                            @delete-input="deleteText"
                        />

                        <ConfirmSearchButton />
                    </div>
                </div>
                <ul class="results-container">
                    <li
                        v-for="(watch, index) in filteredList"
                        :key="index"
                        @click="handleViewChange(watch)"
                    >
                        <router-link :to="`/watches/${watch.name}`">
                            <SimplifiedWatch :watch="watch" />
                        </router-link>
                    </li>
                </ul>
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
import SimplifiedWatch from '../SimplifiedWatch';

import { mapState, mapActions } from 'vuex';

export default {
    name: 'Search',
    data() {
        return {
            text: '',
        };
    },

    computed: {
        ...mapState({
            isSearchOpen: (state) => state.appStore.isSearchOpen,
            watches: (state) => state.productsStore.watches,

            filteredList() {
                if (this.text.length >= 2)
                    return this.watches.filter((watch) => {
                        const word_keys = [
                            watch.name,
                            watch.material,
                            watch.type,
                        ];
                        return word_keys.some((key) =>
                            key.toLowerCase().includes(this.text.toLowerCase())
                        );
                    });
            },
        }),
    },

    methods: {
        ...mapActions({
            toggleSearch: 'appStore/toggleSearch',
            changeCurrentView: 'appStore/changeCurrentView',
        }),
        deleteText() {
            this.text = '';
        },

        handleViewChange(watch) {
            this.toggleSearch();
            this.changeCurrentView(watch);
            this.deleteText();
        },
    },

    components: {
        SearchInput,
        SearchHeading,
        ConfirmSearchButton,
        ExitButton,
        Logo,
        SimplifiedWatch,
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
    max-height: 100vh;

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
    padding: 60px 7vw 0;
    width: 100%;
    margin-bottom: 30px;

    @media (min-width: $mobileL) {
        width: 90%;
    }

    @media (min-width: $tablet) {
        padding: 60px 5vw 0;
        width: 80%;
    }

    @media (min-width: $laptop) {
        padding: 80px 7vw 0;
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

.results-container {
    overflow-y: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
    padding-bottom: 40px;
    margin-bottom: 20px;
    width: 100%;
    padding: 0 0vw;
    @media (min-width: $mobileL) {
        width: 95%;
        padding: 0px 3vw;

        @media (min-width: $tablet) {
            width: 80%;
            padding: 0 5vw;
        }

        @media (min-width: $laptop) {
            width: 70%;
        }
    }
    & li {
        padding: 10px 0;
        background-color: transparent;
        cursor: pointer;
        width: 100%;
        position: relative;
        transition: all 0.3s;

        &:hover {
            background-color: #e0e0e0;
        }

        & > a {
            position: relative;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
