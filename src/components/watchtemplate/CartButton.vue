<template>
    <div class="box-to-cart">
        <button
            class="vertical"
            @mousedown="onMousedown"
            @mouseUp="onMouseup"
            :class="buttonDown"
        >
            <CartIcon /><span class="text">Add to cart</span>
        </button>
        <span class="text">Free shipping</span>
    </div>
</template>

<script>
import CartIcon from '../../assets/icons/Cart';
export default {
    name: 'CartButton',
    data() {
        return {
            buttonDown: false,
        };
    },
    components: {
        CartIcon,
    },

    methods: {
        onMousedown() {
            this.buttonDown = true;
        },
        onMouseup() {
            this.buttonDown = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.box-to-cart {
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

$base-color: #daa520;
$hover-color: rgba(255, 255, 255, 1);

.vertical {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 50px;
    /* margin: 20px; */
    border: 3px solid $base-color;
    margin-bottom: 10px;
    cursor: pointer;

    background-color: $base-color;
    &.buttonDown {
        background-color: #c4941d;
    }

    @media (min-width: $laptop) {
        background-color: rgba(255, 255, 255, 1);
        height: 60px;
    }

    & > svg {
        fill: rgba(255, 255, 255, 1);
        width: 28px;
        height: 28px;
        margin-right: 15px;
        position: relative;
        z-index: 990;
        transition: all 0.4s;

        @media (min-width: $laptop) {
            width: 32px;
            height: 32px;
            margin-right: 15px;
            fill: #daa520;
        }
    }

    > .text {
        position: relative;
        color: rgba(255, 255, 255, 1);
        font-size: 22px;
        font-weight: 500;
        text-transform: uppercase;
        font-family: 'Quicksand', sans-serif;

        @media (min-width: $laptop) {
            font-weight: 600;
            color: #daa520;
            font-size: 24px;
            background-image: linear-gradient(
                90deg,
                $hover-color 0%,
                $hover-color 50%,
                $base-color 50%,
                $base-color 100%
            );
            background-repeat: repeat;
            background-size: 200%;
            background-position: 100% 0;
            -webkit-background-clip: text;
            background-clip: text;
            transition: all 700ms;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: $base-color;
        transform-origin: 100% 0;
        transform: scale3d(0, 1, 1);
        transition: transform 400ms ease-in-out;
    }

    &:hover {
        .text {
            background-position: 0 0;
            color: rgba(255, 255, 255, 1);
        }

        &::before {
            transform-origin: 0 0;
            transform: scale3d(1, 1, 1);
        }

        & svg {
            fill: rgba(255, 255, 255, 1);
        }
    }
}
</style>
