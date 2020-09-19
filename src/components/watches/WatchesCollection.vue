<template>
    <ul class="watch-collection" :class="{ darkTheme: theme }">
        <li v-for="(watch, index) in watchesData" :key="index">
            <WatchTemplate :watchData="watch" />
        </li>
        <div class="spacing"></div>
    </ul>
</template>

<script>
import WatchTemplate from './Watch-template';
import { watches } from '../../assets/watchesData/watchesData';

export default {
    name: 'Watch-Collection',
    props: ['theme'],

    computed: {
        watchesData: function() {
            return watches;
        },
    },

    components: {
        WatchTemplate,
    },
};
</script>

<style lang="scss" scoped>
.watch-collection {
    position: relative;
    overflow: scroll hidden;
    display: flex;
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
}
</style>
