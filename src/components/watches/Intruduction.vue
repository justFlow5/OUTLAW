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
    margin: 30px 10vw;
    text-align: left;

    & h3 {
        font-size: 42px;
        font-family: 'Quicksand', sans-serif;
        margin-bottom: 25px;
        letter-spacing: 2px;
        font-weight: 600;
        line-height: 1.1;
    }

    p {
        font-family: 'Quicksand', sans-serif;
        font-size: 21px;
        line-height: 1.4;
        color: black;
    }
}
</style>
