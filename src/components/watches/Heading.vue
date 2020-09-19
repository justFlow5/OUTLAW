<template>
    <div class="watches-collection-heading">
        <h3>
            {{ title }}
        </h3>
        <p>{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
    name: 'WatchesIntroduction',
    props: ['title', 'subtitle'],
};
</script>

<style lang="scss" scoped>
.watches-collection-heading {
    text-align: left;
    margin: 0 0 70px;

    @media (min-width: $laptop) {
        margin: 0 50px 70px;
    }

    & h3 {
        font-size: 30px;
        font-family: 'Quicksand', sans-serif;
        margin-bottom: 25px;
        letter-spacing: 2px;
        font-weight: 500;
        line-height: 1.1;

        @media (min-width: $mobileL) {
            font-size: 34px;
        }

        @media (min-width: $tablet) {
            font-size: 40px;
        }

        @media (min-width: $laptop) {
            font-size: 42px;
            font-weight: 600;
        }
    }

    p {
        font-family: 'Quicksand', sans-serif;
        font-size: 17px;
        line-height: 1.4;
        color: black;

        @media (min-width: $mobileL) {
            font-size: 19px;
        }
        @media (min-width: $laptop) {
            font-size: 21px;
        }
    }
}
</style>
