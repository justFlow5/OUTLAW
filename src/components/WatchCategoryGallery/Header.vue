<template>
    <div class="header">
        <h3>Timeless style, recognisable at a glance</h3>
        <p>
            The Banitz
            <span class="type">{{ this.currentView }}</span> collection consists
            of models that combines Banitz's know-how and high standards of
            perfection in an approach that heightens watchmaking heritage in its
            most timeless form.
        </p>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Header',
    // props: ['title'],

    computed: {
        ...mapState({
            currentView: (state) => state.appStore.currentView,
        }),
    },
};
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    text-align: left;
    margin-bottom: 20px;

    @media (min-width: $laptop) {
        margin-bottom: 25px;
    }
    & h3 {
        text-transform: uppercase;
        font-size: 23px;
        margin-bottom: 15px;
        letter-spacing: 1px;
        line-height: 1.2;
        @media (min-width: $laptop) {
            font-size: 38px;
            letter-spacing: 2px;
            margin-bottom: 30px;
        }
    }

    & p {
        font-size: 15px;

        line-height: 1.2;
        @media (min-width: $mobileL) {
            font-size: 16px;
            line-height: 1.3;
        }
        @media (min-width: $tablet) {
            font-size: 17px;
            line-height: 1.3;
        }
        @media (min-width: $laptop) {
            font-size: 21px;
        }
        & .type {
            text-transform: capitalize;
        }
    }
}
</style>
