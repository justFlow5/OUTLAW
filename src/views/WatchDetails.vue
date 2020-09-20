<template>
    <div class="watch-container">
        <div class="main-details">
            <div class="watch-presentation"></div>
            <div class="watch-order"></div>
        </div>
        <div class="second-details">
            <div class="description"></div>
            <div class="description-abridged"></div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'WatchDetails',

    methods: {
        ...mapActions({
            toggleNavbarTheme: 'appStore/toggleNavbarTheme',
        }),
    },

    mounted() {
        const currentURL = this.$route.params.id;
        if (currentURL) this.toggleNavbarTheme();
    },
    beforeDestroy() {
        this.toggleNavbarTheme();
    },
};
</script>

<style lang="scss" scoped>
div {
    background: #f9f9f9;
    width: 100vw;
    height: 100vh;
}
</style>
