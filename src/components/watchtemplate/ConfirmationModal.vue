<template>
    <div class="modal-container">
        <slot>Added to cart</slot>
    </div>
</template>

<script>
export default {
    name: 'Modal',

    mounted() {
        setTimeout(() => this.$emit('toggle-confirmation', false), 3000);
    },
};
</script>

<style lang="scss" scoped>
.modal-container {
    position: fixed;
    border-radius: 50px;
    background-color: #202020;
    z-index: 1001;
    color: white;
    font-weight: 600;
    padding: 6px 8px;
    font-size: 18px;
    height: 50px;
    width: 180px;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-50%);
    top: 10%;
    transition: all 0.6s;
}
</style>
