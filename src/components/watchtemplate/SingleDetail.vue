<template>
    <div class="detail-container">
        <label>{{ label }}</label>
        <span class="product-info-material">{{ value }}</span>
    </div>
</template>

<script>
export default {
    name: 'SingleDetail',
    props: ['label', 'value'],
};
</script>

<style lang="scss" scoped>
.detail-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;

    &:nth-child(2n) {
        align-items: flex-end;
    }

    & label {
        margin-bottom: 6px;
        width: unset;
    }

    & span {
        font-size: 22px;
    }
}
</style>
