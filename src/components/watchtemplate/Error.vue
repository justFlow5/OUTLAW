<template>
    <p class="error-text">
        <slot>This field is required</slot>
    </p>
</template>

<script>
export default {
    name: 'Error',
    props: 'errorText',
};
</script>

<style lang="scss" scoped>
.error-text {
    position: absolute;
    left: 0;
    color: red;
    font-size: 16px;
    text-align: left;
    bottom: -50%;

    @media (min-width: $mobileL) {
        font-size: 18px;
        bottom: -35%;
    }
}
</style>
