<template>
    <div class="watch-gallery-container">
        <WatchCollection theme="darkTheme">
            <li v-for="(watch, index) in watchesData" :key="index">
                <div class="watch-template-container">
                    <WatchTemplate
                        :title="watch.name"
                        :subtitle="watch.ad"
                        sourceType="watchesImages"
                        placement="gallery"
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
    @media (min-width: $laptop) {
        /* margin: 0 70px; */
    }
    & ul.darkTheme {
        @include scrollbar;
        padding-bottom: 80px;
        @media (min-width: $tablet) {
            padding-bottom: 75px;
        }
    }
}

.watch-template-container {
    height: 275px;
    width: 230px;
    margin-bottom: 40px;
    margin: 0 5px;

    @media (min-width: $mobileL) {
        height: 390px;
        width: 330px;
    }

    @media (min-width: $tablet) {
        height: 415px;
        width: 360px;
    }

    @media (min-width: $laptop) {
        height: 430px;
        width: 380px;
    }
}
</style>
