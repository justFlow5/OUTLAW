<template>
    <div class="logo" :class="{ lightTheme }">
        <div class="logo-image"></div>
        <span class="logo-name">Banitz</span>
    </div>
</template>

<script>
export default {
    name: 'Logo',
    props: ['lightTheme'],
};
</script>

<style lang="scss" scoped>
.logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    padding-top: 5px;
    pointer-events: none;

    & .logo-name {
        font-family: 'PT Serif', serif;
        color: white;
        letter-spacing: 1.4px;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 600;
        text-shadow: 0px 0px 0px transparent;
        transition: all 0.3s;

        @media (min-width: $mobileL) {
            font-size: 21px;
        }

        @media (min-width: $laptop) {
            font-size: 26px;
        }
    }

    & .logo-image {
        background-image: url('../../assets/icons/logo-white.png');
        width: 30px;
        height: 30px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        transition: all 0.3s;

        @media (min-width: $laptop) {
            width: 55px;
            height: 55px;
        }
    }
    &.lightTheme .logo-name {
        color: #252727;
        text-shadow: 1px 1px 1px rgba(218, 165, 32, 0.8);
    }

    &.lightTheme .logo-image {
        background-image: url('../../assets/icons/logo-gold.png');
    }
}
</style>
