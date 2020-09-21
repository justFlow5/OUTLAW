<template>
    <div class="watch-container">
        <div class="main-details">
            <div class="watch-presentation">
                <img src="../assets/watchesImages/air-king.webp" />
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
                        <label for="sizes">Choose a bracelet size:</label>
                        <select id="size" name="sizes">
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                        </select>
                    </div>
                </div>

                <div class="box-to-cart">
                    <button>Add to cart</button>
                    <span>Free shipping</span>
                </div>
            </div>
        </div>

        <div class="second-details">
            <div class="description">
                <h3 class="description-header" @click="toggleAccordion">
                    description
                </h3>
                <transition
                    name="expand"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @leave="leave"
                >
                    <p class="description-details" v-show="isOpen">
                        safas dfasd fasf asdhbh dasb hfdas bhjasfh
                        asbdfhabsdhfash dbds jhbadsf hbaslhabh sldfbasdfadsl asd
                        afsd asd f as d fas fasd fa sd dfsa fdas adsfasd asdf
                        asd fasd fasd sda
                    </p>
                </transition>
            </div>
            <div class="description-abridged">
                <div class="warranty-info">
                    <h4>5-year warranty</h4>
                    <p></p>
                </div>

                <div class="features-info">
                    <h4>Features</h4>
                    <p></p>
                </div>

                <div class="technical-data-info">
                    <h4>Technical Data</h4>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuantityCounter from '../components/watchtemplate/QuantityCounter';
import { mapActions } from 'vuex';
export default {
    name: 'WatchDetails',
    data() {
        return {
            quantity: 0,
            isOpen: false,
        };
    },
    components: {
        QuantityCounter,
    },

    methods: {
        ...mapActions({
            toggleNavbarTheme: 'appStore/toggleNavbarTheme',
        }),

        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
        enter(el) {
            el.style.height = 'auto';
            const height = getComputedStyle(el).height;
            el.style.height = 0;
            getComputedStyle(el);
            setTimeout(() => {
                el.style.height = height;
            });
        },
        afterEnter(el) {
            el.style.height = 'auto';
        },
        leave(el) {
            el.style.height = getComputedStyle(el).height;
            getComputedStyle(el);
            setTimeout(() => {
                el.style.height = 0;
            });
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
    margin-top: 100px;
    /* padding: 60px 20px; */
    margin-top: 50px;
    position: relative;
}

.main-details {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    align-items: center;

    @media (min-width: $laptop) {
        flex-direction: row;
    }
}

.product-order {
    /* display: flex;
    flex-direction: row; */
    width: 90%;
    height: 80%;

    & .product-info:not(:first-child) {
        padding: 20px 0;
        border-top: solid 1px #e2e2e2;
        font-size: 20px;
    }
}

.box-to-cart {
    width: 100%;
    margin: 20px;
    display: flex;
    flex-direction: column;

    & button {
        height: 50px;
        padding: 10px;
        font-size: 20px;
        text-transform: uppercase;
        font-family: 'Quicksand', sans-serif;
        background-color: #daa520;
        font-weight: 500;
        margin-bottom: 10px;
    }

    & span {
    }
    @media (min-width: $laptop) {
        flex-direction: row;
    }
}

.product-option-primary,
.product-option-secondary {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.product-option-primary {
    /* padding: 10px 0 0;
    border-top: solid 1px #e2e2e2; */
}
.bracelet-size {
    display: flex;
    flex-direction: column;

    & label {
        color: #555;
        font-size: 16px;
    }
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
    width: 60%;
}

.product-quantity {
    display: flex;
    flex-direction: column;
}

.second-details {
    margin: 100px 0 20px;
    padding: 100px 0;

    background-color: rgb(255, 255, 255);
}

.description-header {
    font-family: 'Quicksand', sans-serif;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 400;
    font-size: 37px;
    color: #daa520;
    text-align: center;
}

.expand-enter-active,
.expand-leave-active {
    transition: height 0.5s ease-in-out;
    overflow: hidden;
}

/* .description-details {
    margin: 0 15vw;
    display: none;

    &.open {
        display: inline-block;
    }
} */
</style>
