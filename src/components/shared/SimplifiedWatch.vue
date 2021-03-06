<template>
    <div class="data-container" :class="{ inCart, isWishlist }">
        <img
            :src="
                require(`../../assets/watchesImages/categoryGallery/${watch.name}.webp`)
            "
        />
        <div class="data-wrapper">
            <div class="data">
                <span>watch:</span>
                <span>{{ watch.name }}</span>
            </div>

            <div class="data type">
                <span>type:</span>
                <span> {{ watch.type }} </span>
            </div>
            <div class="data material">
                <span>material:</span>
                <span>{{ watch.material }}</span>
            </div>
            <div class="data sex">
                <span>for:</span>
                <span> {{ watch.sex }}</span>
            </div>

            <div class="data size" :class="{ isWishlist }">
                <span>bracelet size:</span>
                <span> {{ formatedSize }}</span>
            </div>
            <div class="data quantity" :class="{ isWishlist }">
                <span>quantity:</span>
                <span> {{ watch.quantity }}</span>
            </div>

            <div class="data price">
                <span>price:</span>
                <span> {{ formatedPrice }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { formatPrice } from '../../mixins/helpers';
export default {
    name: 'SimplifiedWatchData',
    props: ['watch', 'inCart', 'isWishlist'],
    methods: {
        formatPrice,
    },
    computed: {
        formatedSize() {
            return `${this.watch.bSize} cm`;
        },
        formatedPrice() {
            if (this.isWishlist) return formatPrice(this.watch.price);
            else return formatPrice(this.watch.price * this.watch.quantity);
        },
    },
};
</script>

<style lang="scss" scoped>
.data-container {
    display: flex;
    max-height: 60px;
    align-items: center;
    width: 100%;
    position: relative;
    margin: 10px 0;
    &:hover img {
        transform: scale(1.7);
    }

    & img {
        width: 60px;
        height: 60px;
        transform: scale(1.5);
        transition: all 0.4s;

        @media (min-width: $tablet) {
            margin-right: 20px;
        }
    }

    & span {
        text-align: left;
        &:first-child {
            font-size: 15px;
        }

        &:last-child {
            font-size: 14px;
            margin-top: 5px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    }

    .data-wrapper {
        display: flex;
        flex-direction: row;
        flex: 1 0 49%;

        & .data {
            display: flex;
            flex-direction: column;
            margin: 0 10px;
            align-items: flex-start;
            flex: 0 0 40%;

            @media (min-width: $mobileL) {
                flex: 0 0 25%;
                margin: 0 10px;
            }

            @media (min-width: $tablet) {
                flex: 0 0 20%;
                margin: 0 20px;
            }

            &.type {
                display: none;
                @media (min-width: $mobileL) {
                    display: inherit;
                }
            }

            &.sex {
                display: none;

                @media (min-width: $tablet) {
                    display: inherit;
                }
            }
            &.size,
            &.quantity,
            &.price {
                display: none;
            }
        }
    }

    &.inCart {
        flex-direction: column;
        max-height: unset;
        & img {
            width: 100px;
            height: 100px;
        }
        & .data-wrapper {
            margin-top: 30px;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
        }
        & .data {
            flex: 0 0 45%;
            align-items: center;
            margin: 10px;

            & span:first-child {
                font-size: 15px;
            }

            & span:last-child {
                margin-top: 8px;
                font-size: 16px;
                text-align: center;
            }

            &.quantity span:last-child {
                align-self: center;
            }

            &.size span:last-child {
                text-transform: lowercase;
            }

            &.sex {
                display: none;
            }

            &.size,
            &.quantity,
            &.price {
                display: inherit;
            }
        }

        &.isWishlist {
            flex-direction: row;
            max-height: unset;

            & img {
                width: 50px;
                height: 50px;
            }

            & .data-wrapper {
                margin-top: unset;
                flex-wrap: nowrap;
                flex-direction: row;
            }

            & .data {
                flex: 0 0 30%;
                align-items: center;

                margin: 10px;

                & span:last-child.type {
                    word-break: break-all;
                }
            }

            & .data.type {
                display: inherit;
            }
            & .data.quantity,
            & .data.size,
            & .data.price,
            & .data.type {
                display: none;
            }
            @media (min-width: $mobileL) {
                & .data.type {
                    display: inherit;
                }
            }
        }
    }
}
</style>
