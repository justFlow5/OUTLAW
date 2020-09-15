<template>
    <button class="leave-menu-button" :class="{ isDark: type }"></button>
</template>

<script>
export default {
    name: 'ToggleMenuButton',
    props: ['type'],
};
</script>

<style lang="scss" scoped>
.leave-menu-button {
    position: relative;
    width: 20px;
    height: 20px;
    outline: none;
    cursor: pointer;
    border: none;
    background-color: transparent;
    left: 0;
    top: 10px;

    &.isDark::before,
    &.isDark::after {
        background-color: rgb(33, 33, 33);
    }

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
