<template>
    <nav class="navigation">
        <div class="nav-item"></div>
        <div class="nav-item"></div>
        <div class="nav-item"></div>
        <div class="nav-item"></div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation {
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 6;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    transition: all 0.3s;

    &:hover {
        background: rgba(255, 255, 255, 0.8);
        cursor: pointer;
    }

    & .nav-item {
        font-size: 22px;
        color: white;
    }
}
</style>
