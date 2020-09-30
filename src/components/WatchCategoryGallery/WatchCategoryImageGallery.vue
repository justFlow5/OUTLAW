<template>
    <ul class="watch-gallery-container" v-if="selectedWatches.length > 0">
        <li v-for="(watch, index) in selectedWatches" :key="index">
            <div class="watch-thumbail-container">
                <WatchTemplate
                    :title="watch.name"
                    :subtitle="watch.price"
                    sourceType="watchesImages"
                    placement="gallery"
                />
            </div>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';
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
            watches: (state) => state.productsStore.watches,
        }),
    },
    methods: {
        selectWatchesOfCategory(category) {
            if (category === 'men watches')
                return this.watches.filter((watch) => watch.sex === 'male');
            else if (category === 'women watches')
                return this.watches.filter((watch) => watch.sex === 'female');
            else if (category === 'steel watches')
                return this.watches.filter(
                    (watch) => watch.material === 'steel'
                );
            else if (category === 'gold watches')
                return this.watches.filter(
                    (watch) => watch.material === 'gold'
                );
            else if (category === 'steel and gold')
                return this.watches.filter(
                    (watch) => watch.material === 'steel and gold'
                );
            else if (category === 'gem-set watches')
                return this.watches.filter(
                    (watch) => watch.material === 'gem-set'
                );
        },

        selectSingleWatch(name) {
            return this.watches.find((watch) => {
                return watch.name === name;
            });
        },
    },

    mounted() {
        this.selectedWatches = this.selectWatchesOfCategory(this.category);
        console.log('HEYYHAAA', this.selectedWatches);
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
