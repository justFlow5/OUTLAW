<template>
    <h3><slot></slot></h3>
</template>

<script>
export default {
    name: 'CartHeading',
};
</script>

<style lang="scss" scoped>
h3 {
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    color: rgb(33, 33, 33);
    letter-spacing: 4px;
    font-size: 18px;
    font-weight: 700;
    font-family: 'PT Serif', serif;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(212, 212, 212);
    text-align: left;
    @media (min-width: $mobileL) {
        font-size: 19px;
    }

    @media (min-width: $laptop) {
        font-size: 20px;
    }
}
</style>
