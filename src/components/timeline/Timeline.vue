<template>
    <div class="timeline">
        <div class="img-wrapper"></div>
        <div class="content-container">
            <h3>Discover our historical timeline</h3>
            <button>Discover</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimelinePanel',
};
</script>

<style lang="scss" scoped>
.timeline {
    width: 100%;
    height: 70%;
    position: relative;
    margin: 0 auto;

    @media (min-width: $laptop) {
        width: 100%;
        height: 100%;
    }
}

.img-wrapper {
    width: 100%;
    height: 90%;
    position: relative;
    background-image: url('../../assets/timeline/timeline-small.webp');

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: $tablet) {
        background-image: url('../../assets/timeline/timeline-medium.webp');
    }

    @media (min-width: $laptop) {
        background-image: url('../../assets/timeline/timeline-big.webp');
    }
}

.content-container {
    background-color: rgb(255, 255, 255);
    height: 120px;
    padding: 40px 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    & h3 {
        font-size: 21px;
        padding: 0 20px;
        text-transform: uppercase;
        font-weight: 400;

        @media (min-width: $mobileL) {
            font-size: 24px;
        }

        @media (min-width: $laptop) {
            font-size: 33px;
        }
    }

    & button {
        width: 200px;
        height: 55px;
        margin-top: 20px;
        cursor: pointer;
        background-color: #383838;
        color: white;
        font-size: 15px;
        padding: 10px 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s;
        &:focus,
        &:hover {
            color: #383838;
            border: 1px solid #383838;
            background-color: #fff;
        }

        @media (min-width: 600px) {
            margin-top: 25px;
        }

        @media (min-width: $laptop) {
            width: 180px;
            height: 55px;
            margin-top: unset;
            font-size: 16px;
        }
    }

    @media (min-width: $laptop) {
        flex-direction: row;
        justify-content: space-around;
    }
}
</style>
