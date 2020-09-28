<template>
    <div class="wishlist" @click="toggleHeart">
        <span class="label" :class="{ isHearted }">{{ getLabel }}</span>
        <span v-if="isHearted" class="icon-holder"><HeartIcon /></span>
        <span v-else class="icon-holder"><EmptyHeartIcon /></span>
    </div>
</template>

<script>
import HeartIcon from '../../assets/icons/Heart';
import EmptyHeartIcon from '../../assets/icons/EmptyHeart';

export default {
    name: 'WishListIcon',
    props: ['inWishlist'],
    data() {
        return {
            isHearted: false,
        };
    },
    computed: {
        getLabel() {
            if (this.isHearted) return 'Added to wishlist';
            else return 'Add to wishlist';
        },
    },

    methods: {
        toggleHeart() {
            this.isHearted = !this.isHearted;
        },
    },
    mounted() {
        this.isHearted = this.inWishlist;
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
        fill: #f44336;
        width: 100%;
        height: 100%;
    }
}
</style>
