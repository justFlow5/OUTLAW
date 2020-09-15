<template>
    <h3><slot></slot></h3>
</template>

<script>
export default {
    name: 'SearchHeading',
};
</script>

<style lang="scss" scoped>
h3 {
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    color: rgb(33, 33, 33);
    letter-spacing: 4px;
    font-size: 24px;
    font-weight: 700;
    font-family: 'PT Serif', serif;

    @media (min-width: $mobileL) {
        font-size: 26px;
    }

    @media (min-width: $laptop) {
        font-size: 27px;
    }
}
</style>
