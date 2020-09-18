<template>
    <div class="watch-collection-container">
        <ul class="watch-collection">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Watch-Collection',
};
</script>

<style lang="scss" scoped>
.watch-collection {
    position: relative;
    overflow: scroll hidden;
    display: flex;
    position: relative;

    & li {
        list-style-type: none;
        height: 95%;
        position: relative;
    }
}
</style>
