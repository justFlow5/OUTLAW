<template>
    <div class="watches-collection">
        <div class="video-container">
            <Overlay />
            <VideoBG />
            <Intruduction
                title="Banitz offers a wide range of models ranging from professional to classic watches to suit any wrist."
                subtitle="Explore the Banitz collection by selecting your favourite models, materials, bezels, dials and bracelets to find the watch that was made for you."
            />
        </div>
    </div>
</template>

<script>
import VideoBG from '../components/watches/VideoBG';
import Overlay from '../components/watches/Overlay';
import Intruduction from '../components/watches/Intruduction';

// import WatchesCollection from '../components/watches/WatchesCollection';

export default {
    name: 'Watches',

    components: {
        VideoBG,
        Overlay,
        Intruduction,
        // WatchesCollection,
    },
};
</script>

<style lang="scss" scoped>
.video-container {
    position: absolute;
    height: 90%;
    width: 100%;
    /* overflow: hidden; */

    & > video {
        position: relative;
        width: 100%;
        object-fit: cover;
        width: 100%;
        height: 90%;
    }
}
</style>
