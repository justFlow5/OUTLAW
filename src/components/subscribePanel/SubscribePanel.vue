<template>
    <div class="parallax">
        <div class="text-container">
            <h3>Never stand still</h3>
            <span
                >Receive the latest information about new products, events and
                the fascination of craftsmanship in the smallest of
                spaces.</span
            >
            <button>Register to newsletter</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubscribePanel',
    components: {},
};
</script>

<style lang="scss" scoped>
.parallax {
    height: 600px;
    height: 80vh;
    width: 100%;
    background-image: url('../../assets/subscribe/random2.jpeg');
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    @media (min-width: $laptop) {
        /* background-attachment: fixed; */
    }
}

.text-container {
    position: absolute;

    font-family: 'Quicksand', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;

    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 100%;

    @media (min-width: $mobileL) {
        width: 50%;
    }

    @media (min-width: $laptop) {
        left: unset;
        top: 50%;
        height: unset;
        transform: translate(0, -50%);
        width: 30%;
        padding-right: 25px;
        right: 0;
    }

    & h3 {
        font-size: 30px;
        color: white;
        margin-bottom: 15px;

        @media (min-width: $mobileL) {
            font-size: 31px;
        }
        @media (min-width: $laptop) {
            font-size: 34px;
        }
    }

    & span {
        color: white;
        font-size: 14px;
        line-height: 1.2;

        @media (min-width: $mobileL) {
            font-size: 16px;
            line-height: 1.3;
        }

        @media (min-width: $laptop) {
            font-size: 18px;
            line-height: 1.4;
        }
    }

    & button {
        background: rgba(255, 255, 255, 1);
        color: black;
        border-radius: 16px;
        width: 280px;
        height: 40px;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 600;
        border: 1px solid white;
        /* margin-top: 25px; */
        margin-top: auto;
        margin-bottom: 70px;
        outline: none;
        transition: all 0.3s;

        &:hover {
            background: transparent;
            color: white;
        }

        @media (min-width: $tablet) {
            width: 320px;
            font-weight: 600;
            font-size: 16px;
        }

        @media (min-width: $laptop) {
            margin-top: 25px;
            margin-bottom: unset;
            width: 285px;
        }
    }
}
</style>
