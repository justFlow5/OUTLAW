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
    bottom: -50%;
    left: 0;
    color: red;
    font-size: 18px;
    text-align: left;
    margin: 10px 0;
}
</style>
