<template>
    <button class="leave-menu-button" @click="toggleMenu"></button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'ToggleMenuButton',
    methods: {
        ...mapActions({
            toggleMenu: 'appStore/toggleMenu',
        }),
    },
};
</script>

<style lang="scss" scoped>
.leave-menu-button {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px;
    width: 20px;
    height: 20px;
    outline: none;
    cursor: pointer;
    border: none;
    background-color: transparent;
    position: fixed;
    left: 0;
    top: 10px;

    @media (min-width: $laptop) {
        position: absolute;
        top: unset;
        left: 0;
        bottom: 0;
    }

    &:hover::before,
    &:hover::after {
        background-color: #daa520;
    }

    &::before,
    &::after {
        content: '';
        width: 20px;
        border-radius: 2px;
        display: block;
        height: 2px;
        position: absolute;
        background-color: rgb(255, 255, 255);
        transition: background-color 0.2s;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
}
</style>
