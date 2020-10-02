<template>
    <div class="overlay">
        <h3 :class="{ isBoundary: !isHome }">{{ modifyTitle }}</h3>
        <span> {{ subtitle }}</span>
    </div>
</template>

<script>
export default {
    name: 'WatchesOverlay',
    props: ['title', 'subtitle', 'isHome'],

    computed: {
        modifyTitle() {
            if (this.title === 'men watches') return `banitz men's watches`;
            else if (this.title === 'women watches')
                return `banitz women's watches`;
            else if (this.title === 'steel watches')
                return `banitz steel watches`;
            else if (this.title === 'gold watches')
                return `banitz gold watches`;
            else if (this.title === 'steel and gold')
                return `steel & gold watches`;
            else if (this.title === 'gem-set watches')
                return `banitz gem-set watches`;
            else return 'Banitz Watches';
        },
    },
};
</script>

<style lang="scss" scoped>
.overlay {
    position: absolute;
    width: 100vw;
    height: 100%;
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
        line-height: 1.3;

        &.isBoundary {
            @media (min-width: $tablet) {
                width: 60%;
            }
            @media (min-width: $laptop) {
                width: 70%;
            }

            @media (min-width: $laptopL) {
                width: 60%;
            }
        }
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
