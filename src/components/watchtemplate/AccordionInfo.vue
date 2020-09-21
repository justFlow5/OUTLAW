<template>
    <div class="features-info">
        <h4>{{ header }}</h4>
        <p></p>
    </div>
</template>

<script>
export default {
    name: 'Accordion',
    props: ['header', 'content'],
    data() {
        return {};
    },
};
</script>

<style lang="scss"></style>
