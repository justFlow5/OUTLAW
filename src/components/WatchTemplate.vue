<template>
    <div class="watch-container">
        <router-link
            :to="{
                name: 'WatchCategoryGallery',
                params: { category: category },
            }"
        >
            <div class="img-container">
                <img :src="getImgPath(title)" :alt="title" />
            </div>
            <div class="description" :class="{ darkTheme: theme }">
                <h3
                    :class="{
                        'font-mod':
                            placement !== 'menu' &&
                            sourceType === 'watchesCategories',
                        'font-mod-watch':
                            placement !== 'menu' &&
                            sourceType !== 'watchesCategories',
                    }"
                >
                    {{ upperCaseTitle }}
                </h3>
                <span class="shortDesc" :class="shortDescClass">{{
                    subtitle
                }}</span>
                <span
                    class="moreInfo"
                    :class="{
                        menu: placement === 'menu',
                        'font-mod':
                            this.placement !== 'menu' &&
                            sourceType !== 'watchesCategories',
                    }"
                    >Learn more</span
                >
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'MenuWatchTemplate',

    props: [
        'title',
        'subtitle',
        'category',
        'theme',
        'sourceType',
        'placement',
    ],

    methods: {
        getImgPath(watch) {
            return require(`../assets/${this.sourceType}/` + watch + '.webp');
        },

        // selectWatchesOfCategory(category) {
        //     let selectedWatches;

        //     if (category === 'men watches')
        //         selectedWatches = this.watches.filter((watch) => {
        //             watch.sex === 'men';
        //         });
        //     else if (category === 'women watches')
        //         selectedWatches = this.watches.filter((watch) => {
        //             watch.sex === 'women';
        //         });
        //     else if (category === 'steel watches')
        //         selectedWatches = this.watches.filter((watch) => {
        //             watch.material === 'steel';
        //         });
        //     else if (category === 'gold watches')
        //         selectedWatches = this.watches.filter((watch) => {
        //             watch.material === 'gold';
        //         });
        //     else if (category === 'steel and gold')
        //         selectedWatches = this.watches.filter((watch) => {
        //             watch.material === 'steel and gold';
        //         });
        //     else if (category === 'gem-set watches')
        //         selectedWatches = this.watches.filter((watch) => {
        //             watch.material === 'gem-set';
        //         });

        //     return {
        //         selectedWatches,
        //         category,
        //     };
        // },

        // selectSingleWatch(name) {
        //     return this.watches.find((watch) => {
        //         // console.log(watch.name, name);
        //         return watch.name === name;
        //     });
        // },
    },

    computed: {
        ...mapState({
            watches: (state) => state.productsStore.watches,
        }),
        upperCaseTitle() {
            return this.title.toUpperCase();
        },
        shortDescClass() {
            return {
                'gallery-type': this.placement === 'gallery',
                'font-mod':
                    this.placement !== 'menu' &&
                    this.sourceType !== 'watchesCategories',
            };
        },

        getPath() {
            if (this.sourceType === 'watchesCategories')
                return `/watches/${this.category}`.replace(/\s/g, '-');
            else
                return `/watches/${this.category}/${this.title}`.replace(
                    /\s/g,
                    '-'
                );
        },

        selectProps() {
            console.log('CATEEGOOGIRES');
            if (this.sourceType === 'watchesCategories')
                return this.selectWatchesOfCategory(this.category);
            else return this.selectSingleWatch(this.title);
        },
    },
};
</script>

<style lang="scss" scoped>
.watch-container {
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 100%;
    transition: all 0.3s;

    & .img-container {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    &:hover .description {
        transform: translateY(0px);

        @media (min-width: $laptop) {
            transform: translateY(-20px);
            transform-origin: 50% 50% 0px;
            transition: transform 0.2s ease 0s;
        }
    }
    &:hover img {
        @media (min-width: $laptop) {
            transform: scale(1.05);
            transform-origin: 50% 50% 0px;
            transition: transform 0.6s ease 0s;
        }
    }

    &:hover .moreInfo {
        @media (min-width: $laptop) {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    & .description {
        display: flex;
        flex-direction: column;
        padding-top: 6px;
        background-color: rgb(255, 255, 255);
        color: rgb(33, 33, 33);
        transform: translateY(0px);
        text-align: left;
        transition: transform 0.2s ease 0s;

        &.darkTheme {
            background-color: rgb(33, 33, 33);
            color: rgb(255, 255, 255);
        }
    }

    & img {
        position: relative;
        width: 100%;
        height: 100%;
        transform: scale(1);
        object-fit: cover;
        display: block;
        transition: all 0.3s ease-in-out;
    }

    & h3 {
        font-family: 'PT Serif', serif;
        letter-spacing: 1.1px;
        font-size: 14px;
        font-weight: 400;
        margin-top: 4px;

        &.font-mod-watch {
            font-size: 15px;
            font-weight: 700;

            @media (min-width: $mobileL) {
                font-size: 17px;
                margin-bottom: 3px;
            }
        }

        &.font-mod {
            font-weight: 700;
            font-size: 15px;
            margin-bottom: 3px;

            @media (min-width: $laptop) {
                margin-bottom: 7px;
            }
        }

        @media (min-width: $laptop) {
            font-size: 18px;
            margin-bottom: 6px;
            font-weight: 700;
        }
    }

    & .shortDesc {
        display: none;
        font-size: 13px;
        margin: 4px 0;

        &.font-mod {
            @media (min-width: $mobileL) {
                font-size: 15px;
            }
            @media (min-width: $laptop) {
                display: inline-block;
                font-size: 16px;
                margin: 6px 0 10px;
            }
        }

        &.gallery-type {
            display: inline-block;
        }
    }

    & .moreInfo {
        opacity: 1;
        font-size: 17px;
        font-weight: 400;
        pointer-events: none;
        transition: opacity 0.2s ease 0s;
        &.font-mod {
            font-weight: 700;
        }
        @media (min-width: $laptop) {
            opacity: 0;
        }

        &.menu {
            @media (max-width: $laptop) {
                display: none;
            }
        }
    }
}
</style>
