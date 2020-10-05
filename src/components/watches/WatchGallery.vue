<template>
    <div class="watch-gallery-container">
        <WatchCollection theme="darkTheme">
            <li
                v-for="(watch, index) in getWatchesData"
                :key="index"
                @click="changeCurrentView(watch)"
            >
                <div class="watch-template-container">
                    <WatchTemplate
                        :title="watch.name"
                        :subtitle="watch.tagline"
                        placement="gallery"
                        sourceType="watchesImages"
                        thumbnailPath="sliderGallery"
                    />
                </div>
            </li>
        </WatchCollection>
    </div>
</template>

<script>
import WatchCollection from '../WatchCollection';
import WatchTemplate from '../WatchTemplate';
import { mapState, mapActions } from 'vuex';
// import { watches } from '../../assets/watchesData/watchesData';

export default {
    name: 'Watch-Collection',
    props: ['category'],

    computed: {
        ...mapState({
            watches: (state) => state.productsStore.watches,
        }),
        getWatchesData() {
            return this.watches.filter(
                (watch) => watch.tagline && watch.type === this.category
            );
        },
    },

    components: {
        WatchCollection,
        WatchTemplate,
    },

    methods: {
        ...mapActions({ changeCurrentView: 'appStore/changeCurrentView' }),
    },
};
</script>
<style lang="scss">
@import '../../styles/mixins.scss';

.watch-gallery-container {
    & ul.darkTheme {
        @include scrollbar;
        padding-bottom: 110px;

        @media (min-width: $laptop) {
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
