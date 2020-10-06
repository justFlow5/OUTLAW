<template>
    <div class="watch-container">
        <router-link :to="getPath">
            <div class="img-container">
                <img :src="getImgPath(title)" :alt="title" />
            </div>
            <div
                class="description"
                :class="{
                    darkTheme: theme,
                    'category-watches':
                        this.thumbnailPath === 'categoryGallery',
                }"
            >
                <h3 :class="headerClassess">
                    {{ upperCaseTitle }}
                </h3>
                <span class="shortDesc" :class="shortDescClass">{{
                    subtitle
                }}</span>
                <span class="moreInfo" :class="subtitleClassess"
                    >Learn more</span
                >
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'MenuWatchTemplate',

    props: [
        'title',
        'subtitle',
        'category',
        'theme',
        'placement',
        'sourceType',
        'thumbnailPath',
        'url',
    ],

    methods: {
        getImgPath(watch) {
            if (this.sourceType === 'watchesCategories')
                return require(`../assets/${this.sourceType}/${watch}.webp`);
            else if (this.sourceType === 'watchesImages')
                return require(`../assets/${this.sourceType}/${this.thumbnailPath}/${watch}.webp`);
        },

        ...mapActions({ changeCurrentView: 'appStore/changeCurrentView' }),
    },

    computed: {
        ...mapGetters({
            getWatchByName: 'productsStore/getWatchByName',
        }),

        upperCaseTitle() {
            return this.title.toUpperCase();
        },
        shortDescClass() {
            return {
                'gallery-type': this.placement === 'gallery',
                'font-mod':
                    // this.placement !== 'menu' &&
                    this.sourceType !== 'watchesCategories',
                'category-watches': this.thumbnailPath === 'categoryGallery',
            };
        },

        headerClassess() {
            return {
                'font-mod':
                    this.placement !== 'menu' &&
                    this.sourceType === 'watchesCategories',
                'font-mod-watch':
                    this.placement !== 'menu' &&
                    this.sourceType !== 'watchesCategories',
            };
        },

        subtitleClassess() {
            return {
                menu: this.placement === 'menu',
                'font-mod':
                    this.placement !== 'menu' &&
                    this.sourceType !== 'watchesCategories',
            };
        },

        getPath() {
            if (this.sourceType === 'watchesCategories')
                return `/${this.category}`.replace(/\s/g, '-');
            else if (this.thumbnailPath === 'sliderGallery')
                return `/watches/${this.title}`.replace(/\s/g, '-');
            else return `/${this.category}/${this.title}`.replace(/\s/g, '-');
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

        &.category-watches {
            align-items: center;
            /* padding-bottom: 15px; */
            @media (max-width: $laptop) {
                padding-bottom: 15px;

                & h3 {
                    font-size: 17px;
                    margin-bottom: 5px;
                    text-align: center;
                }

                & .moreInfo {
                    margin-top: 10px;
                    font-size: 16px;
                }
            }
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

        &.category-watches {
            font-size: 18px;
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
