<template>
    <ul class="categories-container">
        <li
            v-for="(category, index) in categories"
            :key="index"
            class="category"
            @click="changeCurrentView(category)"
        >
            <WatchTemplate
                :title="category"
                :category="category"
                thumbnailPath="sliderGallery"
                sourceType="watchesCategories"
            />
        </li>
    </ul>
</template>

<script>
import WatchTemplate from '../shared/WatchTemplate';
import { mapActions } from 'vuex';

export default {
    name: 'WatchCategory',
    data() {
        return {
            categories: [
                `men watches`,
                `women watches`,
                `steel watches`,
                `gold watches`,
                `steel and gold`,
                `gem-set watches`,
            ],
        };
    },
    methods: {
        ...mapActions({ changeCurrentView: 'appStore/changeCurrentView' }),
    },
    components: {
        WatchTemplate,
    },
};
</script>

<style lang="scss" scoped>
.categories-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
    margin-bottom: 100px;

    & .category {
        list-style: none;

        flex: 1 0 40%;
        height: 240px;
        margin: 40px 5px;

        @media (min-width: $mobileL) {
            flex: 0 0 45%;
            height: 320px;
        }
        @media (min-width: $tablet) {
            flex: 0 0 30%;
            height: 370px;
        }

        @media (min-width: $laptop) {
            flex: 0 0 30%;
            height: 480px;
            margin: 30px 5px;
        }
    }
}
</style>
