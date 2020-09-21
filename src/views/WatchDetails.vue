<template>
    <div class="watch-container">
        <div class="main-details">
            <div class="watch-presentation">
                <ImageGallery />
            </div>
            <div class="product-order">
                <div class="product-info product-identity">
                    <h3 class="product-name">Seamaster</h3>
                    <h3 class="product-collection">Omega Master Axe 300</h3>
                </div>

                <div class="product-info product-option-primary">
                    <span class="product-info-material">Gold</span>
                    <span class="product-info-price">18,000,00</span>
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
            <div class="description">
                <Description :description="deskTest" />
            </div>
            <div class="description-abridged">
                <div class="warranty-info">
                    <AccordionInfo
                        header="5-year warranty"
                        :content="test.test3"
                        category="warranty"
                    />
                </div>
                <div class="features-info">
                    <AccordionInfo
                        header="Features"
                        :content="test.test1"
                        category="features"
                    />
                </div>

                <div class="technical-data-info">
                    <AccordionInfo
                        header="Technical Data"
                        category="tech-data"
                        :content="test.test2"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuantityCounter from '../components/watchtemplate/QuantityCounter';
import BraceletSizeInput from '../components/watchtemplate/BraceletSizeInput';
import AccordionInfo from '../components/watchtemplate/AccordionInfo';
import ImageGallery from '../components/watchtemplate/ImageGallery';
import CartButton from '../components/watchtemplate/CartButton';
import Description from '../components/watchtemplate/Description';

import { mapActions } from 'vuex';
export default {
    name: 'WatchDetails',
    data() {
        return {
            isOpen: false,
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
        QuantityCounter,
        BraceletSizeInput,
        AccordionInfo,
        ImageGallery,
        CartButton,
        Description,
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
        const currentURL = this.$route.params.id;
        if (currentURL) this.toggleNavbarTheme();
    },
    beforeDestroy() {
        this.toggleNavbarTheme();
    },
};
</script>

<style lang="scss">
.watch-container {
    background: #f9f9f9;

    /* padding: 60px 20px; */
    /* margin-top: 50px; */
    margin-top: 100px;
    position: relative;

    @media (min-width: $laptop) {
        flex-direction: row;
        /* margin-top: 100px; */
        padding: 20px 60px 20px 0;
    }
}

.main-details {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    align-items: center;

    @media (min-width: $laptop) {
        flex-direction: row;
        padding: 20px 60px 20px 0;
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
}

.product-quantity {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.second-details {
    margin: 50px 10px 20px;
    padding: 50px 0;

    background-color: rgb(255, 255, 255);
}

.description {
    width: 80%;
    margin: 20px auto 50px;
}
</style>
