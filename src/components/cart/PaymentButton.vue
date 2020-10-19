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
    padding: 6px 8px;
    cursor: pointer;
    width: 150px;
    height: 35px;
    color: #181818;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-size: 16px;
    border: 1px solid #181818;
    transition: all 0.3s;

    @media (min-width: $mobileL) {
        width: 130px;
        font-size: 18px;
        border: none;
        padding: 4px 7px;
    }

    & svg {
        width: 15px;
        height: 15px;
        margin-left: 5px;
        fill: #181818;

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
