<template>
    <ul class="watch-gallery-container">
        <li
            v-for="(watch, index) in getSelectedWatches"
            :key="index"
            @click="changeCurrentView(watch)"
        >
            <div class="watch-thumbail-container">
                <WatchTemplate
                    :category="currentView"
                    :title="watch.name"
                    :subtitle="watch.price"
                    sourceType="watchesImages"
                    placement="gallery"
                    thumbnailPath="categoryGallery"
                />
            </div>
        </li>
    </ul>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import WatchTemplate from '../WatchTemplate';

export default {
    name: 'WatchCategoryImageGallery',
    props: ['category'],
    data() {
        return {
            selectedWatches: [],
        };
    },

    components: { WatchTemplate },

    computed: {
        ...mapState({
            // watches: (state) => state.productsStore.watches,
            currentView: (state) => state.appStore.currentView,
        }),

        ...mapGetters({
            getWatchesByCategory: 'productsStore/getWatchesByCategory',
        }),

        getSelectedWatches() {
            return this.getWatchesByCategory(this.currentView);
        },
    },

    methods: {
        ...mapActions({ changeCurrentView: 'appStore/changeCurrentView' }),
    },

    mounted() {
        // console.log(this.getWatchesByCategory(this.currentView));
        // this.selectedWatches = this.getWatchesByCategory(this.currentView);
        // if (this.category)
        //     this.selectedWatches = this.getWatchesByCategory(this.category);
    },
};
</script>

<style lang="scss" scoped>
.watch-gallery-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & li {
        width: 31%;
        /* max-height: 600px; */
        position: relative;
        background-color: white;
        margin: 20px 10px;
    }
}
</style>
