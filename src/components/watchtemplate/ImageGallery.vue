<template>
    <div>
        <vueper-slides
            ref="vueperslides1"
            :touchable="true"
            fade
            :autoplay="false"
            :bullets="false"
            @slide="
                $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                    emit: false,
                })
            "
            fixed-height="550px"
        >
            <vueper-slide
                v-for="(img, i) in images"
                :key="i"
                :image="getImgPath(img)"
            />
        </vueper-slides>

        <vueper-slides
            class="no-shadow thumbnails"
            ref="vueperslides2"
            @slide="
                $refs.vueperslides1.goToSlide($event.currentSlide.index, {
                    emit: false,
                })
            "
            :visible-slides="images.length"
            fixed-height="75px"
            :bullets="false"
            :touchable="false"
            :gap="2.5"
            :arrows="false"
        >
            <vueper-slide
                v-for="(img, i) in images"
                :key="i"
                :image="getImgPath(img)"
                @click.native="$refs.vueperslides2.goToSlide(i)"
            >
            </vueper-slide>
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
    name: 'ImageGallery',
    props: ['images'],
    // data() {
    //     return {
    //         slides: [
    //             {
    //                 image: require('../../assets/watchesImages/categoryGallery/Air King.webp'),
    //             },
    //             {
    //                 image: require('../../assets/watchesImages/categoryGallery/Air King 2.jpg'),
    //             },
    //             {
    //                 image: require('../../assets/watchesImages/categoryGallery/Air King 3.jpg'),
    //             },
    //         ],
    //     };
    // },

    // computed() {
    //     getImgPath(img) {
    //         return  require(`../../assets/watchesImages/categoryGallery/${img}`)
    //     }
    // },
    methods: {
        // getImgPath(watch) {
        //     return require(`../../assets/watchesData/` + watch + '.webp');
        // },

        getImgPath(img) {
            return require(`../../assets/watchesImages/categoryGallery/${img}`);
        },
    },

    components: {
        VueperSlides,
        VueperSlide,
    },
};
</script>

<style lang="scss">
.image-container {
    width: 100%;
    height: 100%;
    position: relative;

    & img {
        width: 100%;
        height: 100%;
    }
}

.vueperslides--2 {
    margin: auto;
    max-width: 300px;

    .vueperslide {
        box-sizing: border-box;
        border: 1px solid #fff;
        transition: 0.3s ease-in-out;
        opacity: 0.7;
    }

    .vueperslide--active {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        opacity: 1;
        border-color: #000;
    }
}

.thumbnails {
    margin: auto;
    max-width: 300px;
    margin-top: 20px;
}

.thumbnails .vueperslide {
    box-sizing: border-box;
    border: 1px solid #fff;
    transition: 0.3s ease-in-out;
    opacity: 0.7;
    cursor: pointer;
}

.thumbnails .vueperslide--active {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    opacity: 1;
    border-color: #000;
}

.vueperslides__arrow {
    color: #daa520 !important;
}
</style>
