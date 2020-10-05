<template>
    <div class="watch-collection-container">
        <WatchCollection>
            <li
                v-for="(watch, index) in watchesData"
                :key="index"
                @click="changeCurrentView(watch)"
            >
                <div class="watch-template-container">
                    <WatchTemplate
                        :title="watch.name"
                        :subtitle="watch.tagline"
                        theme="darkTheme"
                        sourceType="watchesImages"
                        placement="menu"
                        thumbnailPath="sliderGallery"
                    />
                </div>
            </li>
        </WatchCollection>
    </div>
</template>

<script>
import WatchCollection from '../../components/WatchCollection';
import WatchTemplate from '../../components/WatchTemplate';
import { mapGetters, mapActions } from 'vuex';

// import { watches } from '../../assets/watchesData/watchesData';

export default {
    name: 'Watches-Menu-Gallery',

    computed: {
        ...mapGetters({
            getWatchesByCategory: 'productsStore/getWatchesByCategory',
        }),

        watchesData() {
            // const classics = this.getWatchesByCategory('classic', 6);
            // const professionals = this.getWatchesByCategory('professional', 6);
            // console.log('classics: ', classics);
            // return [...classics, ...professionals];
            return this.getWatchesByCategory('tagline');
        },
    },
    methods: {
        ...mapActions({ changeCurrentView: 'appStore/changeCurrentView' }),

        // getWatches() {
        //     const classics= getWatchesByCategory('classic', 7)
        //     const professionals= getWatchesByCategory('professional', 7)

        //     return  [...classics, ...professionals]
        // }
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
        padding-bottom: 60px;
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
