<template>
    <div class="img-wrapper">
        <div class="text-wrapper">
            <h3>Discover our new collection 2020</h3>
            <span>Speedmaster</span>
            <button>Explore now</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewCollectionPanel',
    // data() {
    // return {
    //     imgPath: '',
    // };
    // },

    methods: {},

    //     myEventHandler() {
    //         console.log(window.outerWidth);

    //         if (window.outerWidth < 950)

    //             this.imgPath = require('../../assets/newCollection/newcollection-small.jpg');
    //         else if (window.outerWidth < 1300)

    //             this.imgPath = require('../../assets/newCollection/newcollection-large.jpg');

    //         else
    //             this.imgPath = require('../../assets/newCollection/newcollection-large.jpg');
    //     },
    // },

    // created() {
    //     window.addEventListener('resize', this.myEventHandler);
    // },
    // destroyed() {
    //     window.removeEventListener('resize', this.myEventHandler);
    // },

    // mounted() {
    //     this.myEventHandler();
    // },
};
</script>

<style lang="scss" scoped>
.img-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url('../../assets/newCollection/newcollection-large.jpg');

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.text-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 20px;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, 0);
    width: 70%;

    & h3 {
        color: white;
        font-size: 21px;
        margin-bottom: 10px;
        line-height: 1.2;
    }

    & span {
        color: white;
        font-size: 18px;
        letter-spacing: 2px;
    }

    & button {
        width: 160px;
        height: 40px;
        cursor: pointer;
        border: 1px solid #707070;
        background-color: transparent;
        color: white;
        font-size: 15px;
        margin-top: 10px;
        text-transform: uppercase;
        align-self: center;
        transition: all 0.3s;

        &:hover {
            background-color: #707070;
        }
    }

    @media (min-width: $mobileL) {
        width: 50%;

        & h3 {
            font-size: 23px;
        }

        & span {
            font-size: 19px;
        }
    }

    @media (min-width: $laptop) {
        width: 30%;
        transform: none;
        left: 5%;
        bottom: 20%;

        & h3 {
            font-size: 23px;
        }

        & span {
            font-size: 20px;
        }
        & button {
            margin-top: 25px;
        }
    }
}
</style>
