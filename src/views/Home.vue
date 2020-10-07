<template>
    <div class="watches-collection">
        <div class="video-container">
            <Overlay title="banitz watches" subtitle="the collection" />
            <VideoBG />
        </div>

        <div class="watches-presentation">
            <div class="gallery-container">
                <Heading
                    title="Explore the Banitz collection of prestigious, high-precision timepieces"
                    subtitle="Banitz offers a wide assortment of Classic and Professional watch models to suit any wrist. Discover the broad selection of Banitz watches to find a perfect combination of style and functionality."
                />
                <div class="gallery-reference">
                    <h4 @click="changeCurrentView('classic')">
                        Classic Watches —
                        <router-link to="/classic-collection"
                            >View All</router-link
                        >
                    </h4>
                </div>
                <WatchGallery category="classic" />
            </div>

            <div class="gallery-container">
                <div class="gallery-reference">
                    <h4 @click="changeCurrentView('professional')">
                        Professional Watches —
                        <router-link to="/professional-collection"
                            >View All</router-link
                        >
                    </h4>
                </div>
                <WatchGallery category="professional" />
            </div>

            <div class="categories-container">
                <Heading
                    title="Banitz offers a wide range of models ranging from professional to classic watches to suit any wrist"
                    subtitle="Explore the Banitz collection by selecting your favourite models, materials, bezels, dials and bracelets to find the watch that was made for you."
                />
                <WatchCategories />
            </div>
        </div>
        <div class="newCollection-container">
            <NewCollectionPanel />
        </div>

        <div class="timeline-container">
            <Timeline />
        </div>
    </div>
</template>

<script>
import VideoBG from '../components/watches/VideoBG';
import Overlay from '../components/Overlay';
import Heading from '../components/watches/Heading';
import WatchGallery from '../components/watches/WatchGallery';
import WatchCategories from '../components/watches/WatchCategory';
import NewCollectionPanel from '../components/newCollection/newCollection';
import Timeline from '../components/timeline/Timeline';

import { mapActions } from 'vuex';

export default {
    name: 'Home',

    components: {
        VideoBG,
        Overlay,
        Heading,
        WatchGallery,
        WatchCategories,
        NewCollectionPanel,
        Timeline,
    },

    methods: {
        ...mapActions({
            changeCurrentView: 'appStore/changeCurrentView',
            // addProductToCart: 'userStore/addProductToCart',
            // addProductToWishlist: 'userStore/addProductToWishlist',
        }),
    },

    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
};
</script>

<style lang="scss" scoped>
.watches-collection {
    /* overflow-x: hidden; */
    overflow: hidden;
}

.video-container {
    position: relative;
    height: 73vh;
    width: 100vw;
    margin-bottom: 30px;
    border: none;

    @media (min-width: $mobileL) {
        height: 80vh;
        margin-bottom: 40px;
    }
}

.watches-presentation {
    margin: 0px 20px 30px;

    @media (min-width: $mobileL) {
        margin: 0px 35px 30px;
    }

    @media (min-width: $tablet) {
        margin: 0px 50px 30px;
    }

    @media (min-width: $laptop) {
        margin: 0px 5vw 30px;
    }
}

.gallery-container {
    margin-bottom: 75px;

    @media (min-width: $laptop) {
        margin-bottom: 100px;
    }
}

.gallery-reference {
    text-align: left;
    /* margin-bottom: 40px; */
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 5px;
    font-size: 16px;
    font-family: 'Quicksand', sans-serif;

    @media (min-width: $mobileL) {
        font-size: 17px;
    }

    @media (min-width: $laptop) {
        margin-top: unset;

        font-size: 18px;
    }

    & h4 {
    }

    & a {
        color: darken(#daa520, 2%);
        transition: all 0.3s;
        &:hover {
            color: lighten(#daa520, 8%);
        }
    }
}

.newCollection-container {
    width: 100vw;
    height: 600px;
    position: relative;
}

.timeline-container {
    height: 500px;
    width: 100vw;
    margin: 80px auto 10px;

    @media (min-width: $laptop) {
        width: 100vw;
        margin: 80px auto;
    }
}
</style>
