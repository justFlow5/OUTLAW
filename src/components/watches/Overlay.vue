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

    & h3 {
        font-family: 'PT Serif', serif;
        font-size: 56px;
        color: white;
        letter-spacing: 5px;
        font-weight: 200;
        text-transform: uppercase;
    }

    & span {
        display: block;
        font-family: 'Open Sans Condensed', sans-serif;
        font-family: 'Quicksand', sans-serif;
        font-weight: 300;
        font-size: 26px;
        color: white;
        letter-spacing: 6px;
        margin-top: 25px;
    }
}
</style>
