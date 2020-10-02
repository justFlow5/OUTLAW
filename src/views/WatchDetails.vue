<template>
    <div class="watch-wrapper">
        <div class="main-details">
            <div class="watch-presentation">
                <ImageGallery />
            </div>
            <div class="product-order">
                <div class="product-info product-identity">
                    <h3 class="product-name">{{ currentView.name }}</h3>
                    <h3 class="product-collection">
                        {{ currentView.collection }}
                    </h3>
                </div>

                <div class="product-info product-option-primary">
                    <SingleDetail
                        label="Material"
                        :value="currentView.material"
                    />

                    <SingleDetail label="Price" :value="currentView.price" />
                </div>

                <div class="product-info product-option-secondary">
                    <div class="product-quantity">
                        <QuantityCounter />
                    </div>
                    <div class="bracelet-size">
                        <BraceletSizeInput />
                    </div>
                </div>
                <CartButton />
            </div>
        </div>

        <div class="second-details">
            <div class="watch-description">
                <Description :description="currentView.description" />
            </div>
            <div class="description-abridged">
                <div class="warranty-info">
                    <AccordionInfo
                        header="5-year warranty"
                        :content="getWarrantyInfo"
                        category="warranty"
                    />
                </div>
                <div class="features-info">
                    <AccordionInfo
                        header="Features"
                        :content="currentView.features"
                        category="features"
                    />
                </div>

                <div class="technical-data-info">
                    <AccordionInfo
                        header="Technical Data"
                        category="tech-data"
                        :content="currentView.techData"
                    />
                </div>
            </div>
        </div>
        <div class="wishlist-container"><WishList :inWishlist="true" /></div>
    </div>
</template>

<script>
import SingleDetail from '../components/watchtemplate/SingleDetail';
import QuantityCounter from '../components/watchtemplate/QuantityCounter';
import BraceletSizeInput from '../components/watchtemplate/BraceletSizeInput';
import AccordionInfo from '../components/watchtemplate/AccordionInfo';
import ImageGallery from '../components/watchtemplate/ImageGallery';
import CartButton from '../components/watchtemplate/CartButton';
import Description from '../components/watchtemplate/Description';
import WishList from '../components/watchtemplate/WishList';

import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    name: 'WatchDetails',

    data() {
        return {
            isOpen: false,
            watchData: '',
            test: {
                test1: {
                    a: 1,
                    dupeczka: 'eloszkk',
                    polka: 'duperka',
                    kon: 'dasadsdas',
                },
                test2: {
                    sadfasfasdffadsdasfsad: 'eloszkk',
                    polasdfasdfaska: 'duperka',
                    kosadfsaddsn: 'dsddsffdsfdsdsfdsfsd',
                    ddddddd: 'sdaadsasd',
                    asds: 'sdsdsa',
                },
                test3:
                    'ndsnfjsdnsdkjfsjdk sadj adsjnasj sd nasdj nsadjkfnas jnfas dsasd saddsa jk',
            },

            deskTest: {
                par1:
                    'BANITZ first introduced the Seamaster 300 in 1957 - it was a watch designed especially for divers and professionals who worked underwater',
                par2:
                    'More than half a century later, the timepiece makes a comeback in a completely upgraded and enhanced form, ready for a new generation of adventurers. This Seamaster 300 has a sand-blasted black dial with rhodium-plated hands coated with  "vintage" Super-LumiNova. The polished ceramic bezel ring has a Liquidmetal™ diving scale.',
                par3:
                    'The 41 mm brushed and polished stainless steel case is presented on a matching bracelet. A transparent caseback makes it possible to see the anti-magnetic OMEGA Master Co-Axial calibre 8400 within.',
            },
        };
    },
    components: {
        SingleDetail,
        QuantityCounter,
        BraceletSizeInput,
        AccordionInfo,
        ImageGallery,
        CartButton,
        Description,
        WishList,
    },

    computed: {
        ...mapState({
            watches: (state) => state.productsStore.watches,
            currentView: (state) => state.appStore.currentView,
        }),

        ...mapGetters({
            getWatchByName: 'productsStore/getWatchByName',
        }),

        getWarrantyInfo() {
            if (this.currentView.warranty)
                return 'All BANITZ watches are delivered with a 5-year warranty that covers the repair of any material or manufacturing defects. Please refer to the operating instructions for specific information about the warranty conditions and restrictions.';
            else return 'There is no warranty';
        },
    },

    methods: {
        ...mapActions({
            toggleNavbarTheme: 'appStore/toggleNavbarTheme',
        }),

        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
    },

    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.watchData = this.getWatchByName(this.currentView);

        const currentURL = this.$route.params.id;

        if (currentURL) this.toggleNavbarTheme();
    },
    beforeDestroy() {
        this.toggleNavbarTheme();
    },
};
</script>

<style lang="scss">
.watch-wrapper {
    background: #f9f9f9;
    position: relative;

    @media (min-width: $laptop) {
        flex-direction: row;
        padding: 160px 0px 0 20px;
    }
}

.main-details {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    align-items: center;
    padding: 0 20px 80px;

    @media (min-width: $laptop) {
        flex-direction: row;
        padding: 0 60px 80px;
    }
}

.product-order {
    width: 90%;
    height: 80%;

    & .product-info:not(:first-child) {
        padding: 20px 0;
        border-top: solid 1px #e2e2e2;
        font-size: 20px;
    }
}

.product-option-primary,
.product-option-secondary {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.product-option-primary {
    /* padding: 10px 0 0;
    border-top: solid 1px #e2e2e2; */
}

.watch-presentation {
    margin: 0 auto;
    width: 80%;
    position: relative;
    margin-top: 175px;

    @media (min-width: $laptop) {
        width: 50%;
        margin-top: unset;
    }
}

.bracelet-size {
    display: flex;
    flex-direction: column;
    flex: 2;
    margin-left: 40px;
}

.product-identity {
    display: flex;
    flex-direction: column;
    color: rgb(33, 33, 33);

    font-family: 'Quicksand', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 20px 0 30px;

    & .product-name {
        font-size: 25px;
        margin-bottom: 7px;
    }
    & .product-collection {
        font-size: 19px;
    }
}

.product-order {
    width: 90%;
    position: relative;

    @media (min-width: $mobileL) {
        width: 80%;
    }

    @media (min-width: $laptop) {
        width: 45%;
    }
}

.product-quantity {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.second-details {
    display: flex;
    flex-direction: column;

    padding: 70px 25px 20px;

    background-color: rgb(255, 255, 255);

    @media (min-width: $laptop) {
        padding: 100px 60px 20px;
        flex-direction: row;
        justify-content: space-around;

        & > div {
            flex: 0 0 40%;
        }
    }
}

.watch-description {
    width: 80%;
    margin: 20px auto 50px;

    @media (min-width: $laptop) {
        width: unset;
        margin: unset;
    }
}

.wishlist-container {
    position: absolute;
    top: 120px;
    right: 50px;
}
</style>
