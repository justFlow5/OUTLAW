<template>
    <div class="watch-collection-container">
        <WatchCollection>
            <li v-for="(watch, index) in watchesData" :key="index">
                <div class="watch-template-container">
                    <WatchTemplate
                        :title="watch.name"
                        :subtitle="watch.ad"
                        theme="darkTheme"
                        sourceType="watchesImages"
                    />
                </div>
            </li>
        </WatchCollection>
    </div>
</template>

<script>
import WatchCollection from '../../components/WatchCollection';
import WatchTemplate from '../../components/WatchTemplate';

import { watches } from '../../assets/watchesData/watchesData';

export default {
    name: 'Watches-Menu-Gallery',

    computed: {
        watchesData: function() {
            return watches;
        },
    },

    components: { WatchCollection, WatchTemplate },
};
</script>

<style lang="scss">
@import '../../styles/mixins.scss';

.watch-collection-container {
    margin: 0 10px;
    @media (min-width: $laptop) {
        margin: 0 70px;
    }
    & ul {
        padding-bottom: 50px;
        @include scrollbar(
            rgb(255, 255, 255),
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.2)
        );

        @media (min-width: $tablet) {
            padding-bottom: 75px;
        }
    }

    & .watch-template-container {
        height: 155px;
        width: 135px;
        margin-bottom: 40px;
        margin: 0 5px;

        @media (min-width: $mobileL) {
            height: 235px;
            width: 200px;
        }

        @media (min-width: $tablet) {
            height: 245px;
            width: 200px;
        }

        @media (min-width: $laptop) {
            height: 225px;
            width: 190px;
        }
    }
}

.watch-template-container {
    height: 155px;
    width: 135px;
    margin-bottom: 40px;
    margin: 0 5px;

    @media (min-width: $mobileL) {
        height: 235px;
        width: 200px;
    }

    @media (min-width: $tablet) {
        height: 245px;
        width: 200px;
    }

    @media (min-width: $laptop) {
        height: 225px;
        width: 190px;
    }
}
</style>
