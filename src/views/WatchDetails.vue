<template>
    <div class="watch-wrapper">
        <div class="main-details">
            <div class="watch-presentation">
                <ImageGallery />
            </div>
            <div class="product-order">
                <div class="product-info product-identity">
                    <DecLine />
                    <!-- <h3 class="product-collection">
                        {{ currentView.collection }}
                    </h3> -->

                    <h3 class="product-name">{{ currentView.name }}</h3>
                    <DecLine />
                </div>

                <div class="product-info product-option-primary">
                    <SingleDetail
                        label="Material"
                        :value="currentView.material"
                    />

                    <SingleDetail
                        label="Price"
                        :value="formatPrice(currentView.price)"
                    />
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
import DecLine from '../assets/icons/DecLine';
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    name: 'WatchDetails',

    data() {
        return {
            isOpen: false,
            watchData: '',
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
        DecLine,
    },

    computed: {
        ...mapState({
            currentView: (state) => state.appStore.currentView,
            isWatchSpeckOpen: (state) => state.appStore.isWatchSpeckOpen,
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

        formatPrice(price) {
            return price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
        },
    },

    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.watchData = this.getWatchByName(this.currentView);
        const currentURL = this.$route.params.id;
        if (currentURL && !this.isWatchSpeckOpen) this.toggleNavbarTheme();
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
    font-family: 'PT Serif';

    align-items: flex-start;
    align-items: center;

    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 20px 0 30px;

    & .product-name {
        font-size: 36px;
        font-weight: 500;
        margin: 15px;
        font-family: 'Caveat', cursive;
        font: 400 38px 'Merienda One', Helvetica, sans-serif;
        color: rgba(0, 0, 0, 0.7);
        text-shadow: 3px 3px 3px #fff;
    }
    & .product-collection {
        font-size: 32px;
        font-family: 'Caveat', cursive;
        letter-spacing: 3px;
        color: #232b2b;
        margin-bottom: 15px;
        text-transform: none;
    }

    & svg:last-child {
        transform: rotate(180deg);
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
