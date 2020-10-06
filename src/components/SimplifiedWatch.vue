<template>
    <div class="data-container">
        <img
            :src="
                require(`../assets/watchesImages/categoryGallery/${watch.name}.webp`)
            "
        />
        <div class="data-wrapper">
            <div class="data ">
                <span>name:</span>
                <span>{{ watch.name }}</span>
            </div>

            <div class="data type">
                <span>type:</span>
                <span> {{ watch.type }} </span>
            </div>
            <div class="data material">
                <span>material:</span>
                <span>{{ watch.material }}</span>
            </div>
            <div class="data sex">
                <span>for:</span>
                <span> {{ watch.sex }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SimplifiedWatchData',
    props: ['watch'],
};
</script>

<style lang="scss" scoped>
.data-container {
    display: flex;
    max-height: 60px;
    align-items: center;
    width: 100%;
    position: relative;

    margin: 10px 0;

    &:hover img {
        transform: scale(1.7);
    }

    & img {
        width: 60px;
        height: 60px;
        transform: scale(1.5);
        transition: all 0.4s;

        @media (min-width: $tablet) {
            margin-right: 20px;
        }
    }

    & span {
        text-align: left;
        &:first-child {
            font-size: 15px;
        }

        &:last-child {
            font-size: 14px;
            margin-top: 5px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    }
}

.data-wrapper {
    display: flex;
    flex-direction: row;
    flex: 1 0 49%;

    & .data {
        display: flex;
        flex-direction: column;
        margin: 0 10px;
        align-items: flex-start;
        flex: 0 0 40%;

        @media (min-width: $mobileL) {
            /* flex: 0 0 30%; */
            flex: 0 0 25%;

            margin: 0 10px;
        }

        @media (min-width: $tablet) {
            flex: 0 0 20%;
            margin: 0 20px;
        }

        &.type {
            display: none;
            @media (min-width: $mobileL) {
                display: inherit;
            }
        }

        &.sex {
            display: none;

            @media (min-width: $tablet) {
                display: inherit;
            }
        }
    }
}
</style>
