<template>
    <carousel
        :per-page="1"
        :mouse-drag="true"
        :autoplay="true"
        paginationColor="#ccc"
        paginationActiveColor="#daa520"
        :loop="true"
        :autoplayTimeout="5000"
    >
        <!-- <slide v-for='(img, index) in images' :key='index'>
        <img :src='getImgPath(img)' :alt='img'/>
    </slide> -->

        <slide>
            <img src="../../assets/watchesImages/air-king.webp" />
        </slide>
        <slide>
            <img src="../../assets/watchesImages/cellini.webp" />
        </slide>
    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'ImageGallery',
    props: ['images'],
    methods: {
        getImgPath(watch) {
            return require(`../../assets/watchesData/` + watch + '.webp');
        },
    },

    components: {
        Carousel,
        Slide,
    },
};
</script>

<style lang="scss" scoped></style>
