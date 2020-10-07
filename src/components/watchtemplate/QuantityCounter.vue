<template>
    <div>
        <span class="quantity-label">QTY</span>
        <div class="quantity-action-wrapper">
            <button @click="$emit('new-quantity', -1)">-</button>
            <span class="quantity-number">{{ this.quantity }}</span>
            <button @click="$emit('new-quantity', 1)">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuantityCounter',
    props: ['quantity'],
};
</script>

<style lang="scss" scoped>
.quantity-label {
    font-size: 16px;
    text-transform: uppercase;
    text-align: left;
    color: #555;
    width: 100%;
    display: inline-block;
}

.quantity-action-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 5px;

    & button,
    & .quantity-number {
        color: rgb(33, 33, 33);
        font-size: 21px;
        background-color: rgb(255, 255, 255);
        border: 1px solid #e2e2e2;
        height: 50px;
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
    }

    & button {
        width: 33px;
        cursor: pointer;

        @media (min-width: $laptop) {
            width: 39px;
        }
    }

    & .quantity-number {
        padding: 0 20px;
        font-size: 18px;

        @media (min-width: $laptop) {
            padding: 0 15px;
        }
    }
}
</style>
