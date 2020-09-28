<template>
    <div>
        <h3 class="description-header">
            description
        </h3>

        <p
            class="description-details"
            v-for="(paragraph, index) in description"
            :key="index"
        >
            {{ paragraph }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Description',
    props: ['description'],
};
</script>

<style lang="scss" scoped>
.description-header {
    font-family: 'Quicksand', sans-serif;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 400;
    font-size: 28px;
    color: #daa520;
    text-align: center;
    margin-bottom: 30px;

    @media (min-width: $laptop) {
        text-align: left;
        font-size: 37px;
    }
}

.description-details {
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 16px;
    color: #555;

    @media (min-width: $laptop) {
        text-align: left;
    }
}
</style>
