<template>
    <div class="sidebar">
        <div
            class="sidebar-backdrop"
            :class="{ open: menuActivated }"
            @click="closeSidebarPanel"
        ></div>
        <transition name="slide">
            <div v-if="menuActivated" class="sidebar-panel">
                <div class="menu-header">
                    <button class="leave-menu-button"></button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: ['menuActivated'],
    data() {},
    methods: {
        closeSidebarPanel() {
            this.$emit('menu-activated', false);
        },
    },
    components: {},
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
    transition: transform 0.5s cubic-bezier(0.75, 0.11, 0.49, 1) 0.3s,
        opacity 0.3s cubic-bezier(0.75, 0.11, 0.49, 1) 0.4s;
}

.slide-leave-active {
    transition: transform 0.5s ease-in 0.3s, opacity 0.3s ease-in 0.4s;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67),
        opacity 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

.sidebar-backdrop {
    background-color: transparent;
    z-index: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    transition: background-color 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) 0.3s;

    &.open {
        z-index: 999;
        cursor: pointer;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
    }
}

.sidebar-panel {
    position: relative;
    overflow-y: auto;
    background: rgb(33, 33, 33);
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 90vw;

    @media (min-width: $tablet) {
        width: 70vw;
    }
    @media (min-width: $laptop) {
        width: 50vw;
    }
}

.leave-menu-button {
    position: relative;
    padding: 20px;
    width: 18px;
    height: 18px;
    outline: none;
    cursor: pointer;
    border: none;
    background-color: transparent;

    &:hover::before,
    &:hover::after {
        background-color: #daa520;
    }

    &::before,
    &::after {
        content: '';
        width: 18px;
        border-radius: 2px;
        display: block;
        height: 2px;
        position: absolute;
        top: 20px;
        left: 11px;
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
