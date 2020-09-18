<template>
    <div class="watch-container">
        <div class="img-container">
            <img :src="getImgPath(watchData.name)" :alt="watchData.name" />
        </div>
        <div class="description" :class="{ darkTheme: theme }">
            <h3>{{ watchData.name.toUpperCase() }}</h3>
            <span class="tablet-up-only">{{ watchData.ad }}</span>
            <span class="moreInfo tablet-up-only'">Learn more</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuWatchTemplate',
    props: ['watchData', 'theme'],
    methods: {
        getImgPath(watch) {
            return require('../assets/watchesImages/' + watch + '.webp');
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
        transform: translateY(-20px);
        transform-origin: 50% 50% 0px;
        transition: transform 0.2s ease 0s;
    }
    &:hover img {
        transform: scale(1.05);
        transform-origin: 50% 50% 0px;
        transition: transform 0.6s ease 0s;
    }

    &:hover .moreInfo {
        opacity: 1;
        transition: opacity 0.2s ease 0s;
    }

    & > .description {
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

        @media (min-width: $mobileL) {
            font-size: 16px;
        }

        @media (min-width: $laptop) {
            font-size: 18px;
            font-weight: 700;
        }
    }

    & span {
        font-size: 13px;
        margin: 4px 0;
    }

    & .moreInfo {
        opacity: 0;
        font-size: 17px;
        font-weight: 600;
        pointer-events: none;
        transition: opacity 0.2s ease 0s;
    }
}

.tablet-up-only {
    display: none;

    @media (min-width: $tablet) {
        display: inline-block;
    }
}
</style>
