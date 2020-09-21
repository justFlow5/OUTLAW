<template>
    <div>
        <span class="quantity-label">QTY</span>
        <div class="quantity-action-wrapper">
            <button @click="decreaseQuantity">-</button>
            <span class="quantity-number">{{ quantity }}</span>
            <button @click="increaseQuantity">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuantityCounter',
    data() {
        return {
            quantity: 0,
        };
    },

    methods: {
        increaseQuantity() {
            if (this.quantity <= 9) this.quantity++;
        },

        decreaseQuantity() {
            if (this.quantity > 0) this.quantity--;
        },
    },
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
        width: 39px;
        cursor: pointer;
    }

    & .quantity-number {
        padding: 0 20px;
        font-size: 18px;
    }
}
</style>
