<template>
    <div class="watches-collection">
        <div class="video-container">
            <Overlay title="banitz watches" subtitle="the collection" />
            <VideoBG />
        </div>

        <div class="watches-presentation">
            <div class="gallery-container">
                <Heading
                    title="Explore the Banitz collection of prestigious, high-precision timepieces."
                    subtitle="Banitz offers a wide assortment of Classic and Professional watch models to suit any wrist. Discover the broad selection of Banitz watches to find a perfect combination of style and functionality."
                />
                <div class="gallery-reference">
                    <h4>Classic Watches — <span>View All</span></h4>
                </div>
                <WatchGallery />
            </div>

            <div class="gallery-container">
                <div class="gallery-reference">
                    <h4>Professional Watches — <span>View All</span></h4>
                </div>
                <WatchGallery />
            </div>
            <Heading
                title="Banitz offers a wide range of models ranging from professional to classic watches to suit any wrist."
                subtitle="Explore the Banitz collection by selecting your favourite models, materials, bezels, dials and bracelets to find the watch that was made for you."
            />
            <WatchCategories />
        </div>
        <div class="newCollection-container">
            <NewCollectionPanel />
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

import { mapState } from 'vuex';

export default {
    name: 'Home',

    components: {
        VideoBG,
        Overlay,
        Heading,
        WatchGallery,
        WatchCategories,
        NewCollectionPanel,
    },

    computed: {
        ...mapState({
            isMenuOpen: (state) => state.appStore.isMenuOpen,
            isSearchOpen: (state) => state.appStore.isSearchOpen,
            isCartOpen: (state) => state.appStore.isCartOpen,
        }),
    },

    watch: {
        isMenuOpen: function() {
            if (this.isMenuOpen) {
                document.documentElement.style.overflow = 'hidden';
                return;
            }
            document.documentElement.style.overflow = 'auto';
        },

        isSearchOpen: function() {
            if (this.isSearchOpen) {
                document.documentElement.style.overflow = 'hidden';
                return;
            }
            document.documentElement.style.overflow = 'auto';
        },

        isCartOpen: function() {
            if (this.isCartOpen) {
                document.documentElement.style.overflow = 'hidden';
                return;
            }
            document.documentElement.style.overflow = 'auto';
        },
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
    margin-bottom: 100px;
}

.gallery-reference {
    text-align: left;
    margin-bottom: 40px;
    font-size: 18px;
    font-family: 'Quicksand', sans-serif;

    & h4 {
    }

    & span {
        color: #daa520;
    }
}

.newCollection-container {
    width: 100vw;
    height: 600px;
    position: relative;
}
</style>
