<template>
    <button v-if="isCart">
        Payment<span><ArrowIcon /></span>
    </button>
</template>

<script>
import ArrowIcon from '../../assets/icons/ThinArrow';
export default {
    name: 'PaymentButton',
    props: ['isCart'],
    components: {
        ArrowIcon,
    },
};
</script>

<style lang="scss" scoped>
button {
    border-radius: 10px;
    position: relative;
    padding: 4px 7px;
    cursor: pointer;
    width: 120px;
    height: 30px;
    color: #303030;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    background: transparent;
    top: 40px;
    right: 30px;
    font-size: 14px;
    border: 1px solid #303030;
    transition: all 0.3s;

    @media (min-width: $mobileL) {
        width: 130px;
        font-size: 19px;
        border: none;
        top: unset;
        right: unset;
    }

    & svg {
        width: 15px;
        height: 15px;
        margin-left: 5px;
        fill: #303030;

        @media (min-width: $laptop) {
            width: 20px;
            height: 20px;
        }
    }
    &:hover svg {
        animation: moving 1.2s infinite ease-in;
    }
}

@keyframes moving {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(40%);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
