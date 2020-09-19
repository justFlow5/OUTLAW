<template>
    <div class="overlay">
        <h3>Banitz Watches</h3>
        <span>The collection</span>
    </div>
</template>

<script>
export default {
    name: 'WatchesOverlay',
};
</script>

<style lang="scss" scoped>
.overlay {
    position: absolute;
    width: 100%;
    height: 90%;
    z-index: 3;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    padding: 10vw;

    & h3 {
        font-family: 'PT Serif', serif;
        font-size: 36px;
        color: white;
        letter-spacing: 5px;
        font-weight: 200;
        text-transform: uppercase;
        @media (min-width: $mobileL) {
            font-size: 38px;
        }

        @media (min-width: $tablet) {
            font-size: 40px;
        }

        @media (min-width: $laptop) {
            font-size: 56px;
        }
    }

    & span {
        display: block;
        font-family: 'Open Sans Condensed', sans-serif;
        font-family: 'Quicksand', sans-serif;
        font-weight: 300;
        font-size: 15px;
        color: white;
        letter-spacing: 6px;
        margin-top: 18px;

        @media (min-width: $mobileL) {
            font-size: 22px;
        }

        @media (min-width: $laptop) {
            font-size: 26px;
            margin-top: 25px;
        }
    }
}
</style>
