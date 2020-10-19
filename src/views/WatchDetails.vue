<template>
    <div class="watch-wrapper">
        <div class="main-details">
            <div class="watch-presentation">
                <ImageGallery :images="currentView.images" />
            </div>
            <div class="product-order">
                <div class="product-info product-identity">
                    <DecLine />
                    <h3 class="product-name">{{ currentView.name }}</h3>
                    <DecLine />
                </div>

                <div class="product-info product-option-primary">
                    <SingleDetail
                        label="Material"
                        :value="currentView.material"
                    />

                    <SingleDetail label="Type" :value="currentView.type" />

                    <SingleDetail label="For" :value="currentView.sex" />

                    <SingleDetail
                        label="Price"
                        :value="formatPrice(currentView.price)"
                    />
                </div>

                <div class="product-info product-option-secondary">
                    <div class="product-quantity">
                        <QuantityCounter
                            :quantity="this.quantity"
                            @new-quantity="updateQuantity"
                        />
                    </div>
                    <div class="bracelet-size">
                        <BraceletSizeInput
                            :braceletSize="braceletSize"
                            @select-change="updateBracelet"
                        />
                        <Error v-show="isError" />
                    </div>
                </div>
                <div class="cart-button-container" @click="handleButtonClick">
                    <CartButton />
                </div>
                <div
                    class="wishlist-container"
                    @click="addToSelection(currentView, 'wishlist')"
                >
                    <WishList :inWishlist="inWishlist" />
                </div>
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
        <transition name="fade">
            <ConfirmationModal
                v-if="isConfirmed"
                @toggle-confirmation="updateIsConfirmed"
            />
        </transition>
    </div>
</template>

<script>
import BraceletSizeInput from '../components/watchtemplate/BraceletSizeInput';
import ConfirmationModal from '../components/watchtemplate/ConfirmationModal';
import QuantityCounter from '../components/watchtemplate/QuantityCounter';
import SingleDetail from '../components/watchtemplate/SingleDetail';
import ImageGallery from '../components/watchtemplate/ImageGallery';
import Description from '../components/watchtemplate/Description';
import CartButton from '../components/watchtemplate/CartButton';
import AccordionInfo from '../components/shared/AccordionInfo';
import WishList from '../components/watchtemplate/WishList';
import Error from '../components/watchtemplate/Error';
import DecLine from '../assets/icons/DecLine';

import { mapState, mapGetters, mapActions } from 'vuex';
import { formatPrice } from '../mixins/helpers';
export default {
    name: 'WatchDetails',

    data() {
        return {
            isOpen: false,
            watchData: '',
            quantity: 1,
            braceletSize: '',
            isError: false,
            isConfirmed: false,
        };
    },
    components: {
        BraceletSizeInput,
        ConfirmationModal,
        QuantityCounter,
        AccordionInfo,
        SingleDetail,
        ImageGallery,
        Description,
        CartButton,
        WishList,
        DecLine,
        Error,
    },

    computed: {
        ...mapState({
            currentView: (state) => state.appStore.currentView,
            isWatchSpeckOpen: (state) => state.appStore.isWatchSpeckOpen,
        }),

        ...mapGetters({
            getWatchByName: 'productsStore/getWatchByName',
            isInWishlist: 'userStore/isInWishlist',
        }),

        getWarrantyInfo() {
            if (this.currentView.warranty)
                return 'All BANITZ watches are delivered with a 5-year warranty that covers the repair of any material or manufacturing defects. Please refer to the operating instructions for specific information about the warranty conditions and restrictions.';
            else return 'There is no warranty';
        },

        inWishlist() {
            return this.isInWishlist(this.currentView.id);
        },
    },

    methods: {
        formatPrice,
        ...mapActions({
            toggleNavbarTheme: 'appStore/toggleNavbarTheme',
            addProductToCart: 'userStore/addProductToCart',
            addProductToWishlist: 'userStore/addProductToWishlist',
        }),

        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },

        updateBracelet(size) {
            this.braceletSize = size;
            if (this.isError) this.isError = false;
        },

        updateQuantity(payload) {
            const estimated = this.quantity + payload;
            if (estimated > 0 && estimated < 10) this.quantity = estimated;
        },

        handleButtonClick() {
            if (this.braceletSize) {
                this.isError = false;
                this.addToSelection(this.currentView, 'cart');
            } else this.isError = true;

            this.braceletSize = '';
            this.quantity = 1;
            !this.isError && this.updateIsConfirmed(true);
        },

        addToSelection(watch, type) {
            const selectedWatch = {
                ...watch,
                quantity: this.quantity,
                bSize: this.braceletSize,
                id: `${this.braceletSize}${watch.id}`,
            };

            if (type === 'cart') this.addProductToCart(selectedWatch);
            else if (type === 'wishlist') {
                this.addProductToWishlist(watch);
            }
        },

        updateIsConfirmed() {
            this.isConfirmed = !this.isConfirmed;
        },
    },

    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.watchData = this.getWatchByName(this.currentView);
        const currentURL = this.$route.params.id;
        if (currentURL && !this.isWatchSpeckOpen) this.toggleNavbarTheme(true);
    },

    beforeDestroy() {
        this.toggleNavbarTheme(false);
    },
};
</script>

<style lang="scss">
.watch-wrapper {
    background: #f9f9f9;
    position: relative;
    overflow-x: hidden;

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
        padding: 0 60px 80px 15px;
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

    & .product-info:not(:first-child) {
        padding: 20px 0 10px;
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
    flex-wrap: wrap;
}

.product-option-primary > div {
    flex: 0 0 45%;
}

.watch-presentation {
    margin: 0 auto;
    width: 100%;

    position: relative;
    margin-top: 115px;

    @media (min-width: $mobileL) {
        width: 80%;
    }

    @media (min-width: $tablet) {
        width: 70%;
    }

    @media (min-width: $laptop) {
        width: 45%;
        margin-top: unset;
    }
}

.bracelet-size {
    display: flex;
    flex-direction: column;
    flex: 2;
    margin-left: 40px;
    position: relative;
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

.product-quantity {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.second-details {
    display: flex;
    flex-direction: column;
    padding: 70px 25px;
    background-color: rgb(255, 255, 255);
    @media (min-width: $tablet) {
        padding: 70px 15%;
    }
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

.cart-button-container {
    margin-top: 50px;
}

.wishlist-container {
    position: absolute;
    bottom: -10%;
    left: 50%;
    transform: translate(-50%, 0);

    @media (min-width: $laptop) {
        bottom: unset;
        top: -10%;
        right: 50px;
        left: unset;
        transform: unset;
    }
}

.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 2s;
}
.fade-enter-to {
    opacity: 1;
}
</style>
