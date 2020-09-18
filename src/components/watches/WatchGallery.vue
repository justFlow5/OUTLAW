<template>
    <div class="watch-gallery-container">
        <WatchCollection theme="darkTheme">
            <li v-for="(watch, index) in watchesData" :key="index">
                <div class="watch-template-container">
                    <WatchTemplate
                        :title="watch.name"
                        :subtitle="watch.ad"
                        sourceType="watchesImages"
                    />
                </div>
            </li>
        </WatchCollection>
    </div>
</template>

<script>
import WatchCollection from '../WatchCollection';
import WatchTemplate from '../WatchTemplate';
import { watches } from '../../assets/watchesData/watchesData';

export default {
    name: 'Watch-Collection',

    computed: {
        watchesData: function() {
            return watches;
        },
    },

    components: {
        WatchCollection,
        WatchTemplate,
    },
};
</script>
<style lang="scss">
@import '../../styles/mixins.scss';

.watch-gallery-container {
    /* margin: 0 10px; */
    @media (min-width: $laptop) {
        /* margin: 0 70px; */
    }
    & ul.darkTheme {
        @include scrollbar;
        padding-bottom: 50px;
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
            height: 380px;
            width: 330px;
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
