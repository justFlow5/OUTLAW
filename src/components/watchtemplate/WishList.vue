<template>
    <div class="wishlist">
        <span class="label" :class="{ isHearted: inWishlist }">{{
            getLabel
        }}</span>
        <span v-if="inWishlist" class="icon-holder"><HeartIcon /></span>
        <span v-else class="icon-holder"><EmptyHeartIcon /></span>
    </div>
</template>

<script>
import HeartIcon from '../../assets/icons/Heart';
import EmptyHeartIcon from '../../assets/icons/EmptyHeart';

export default {
    name: 'WishListIcon',
    props: ['inWishlist'],

    computed: {
        getLabel() {
            if (this.inWishlist) return 'Added to wishlist';
            else return 'Add to wishlist';
        },
    },

    components: {
        HeartIcon,
        EmptyHeartIcon,
    },
};
</script>

<style lang="scss" scoped>
.wishlist {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.label {
    color: rgb(0, 0, 0);
    font-size: 14px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;

    &.isHearted {
        @media (min-width: $laptop) {
            font-weight: 600;
        }
    }
}

.icon-holder {
    width: 20px;
    height: 20px;
    position: relative;
    & svg {
        fill: rgb(0, 0, 0);
        width: 100%;
        height: 100%;
    }
}
</style>
