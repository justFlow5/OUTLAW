<template>
    <div class="wishlist">
        <span class="label">{{ getLabel }}</span>
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
    color: #f44336;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
}

.icon-holder {
    width: 20px;
    height: 20px;
    position: relative;
    & svg {
        fill: #f44336;
        width: 100%;
        height: 100%;
    }
}
</style>
