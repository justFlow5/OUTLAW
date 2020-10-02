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

    components: { WatchTemplate },

    computed: {
        ...mapState({
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
};
</script>

<style lang="scss" scoped>
.watch-gallery-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & li {
        width: 31%;

        position: relative;
        background-color: white;
        margin: 20px 10px;
    }
}
</style>
