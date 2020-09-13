<template>
    <div class="menu-button">
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu-button {
    & span {
        display: block;
        height: 0px;
        width: 18px;
        margin-bottom: 5px;
        border-width: 1px;
        border-style: solid;
        border-radius: 2px;

        background-color: rgb(255, 255, 255);
        /* transition: all 0.3s; */

        &:last-child {
            margin-bottom: 0px;
        }

        @media (min-width: $tablet) {
            width: 21px;
            margin-bottom: 6px;
        }

        @media (min-width: $laptop) {
            width: 23px;
            margin-bottom: 6px;
        }
    }
}
</style>
