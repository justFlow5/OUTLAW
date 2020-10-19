<template>
    <div class="wrapper">
        <span v-if="isCorrectData" :class="{ isCorrectData: isCorrectData }"
            ><CorrectIcon />
        </span>
        <span v-else :class="{ isCorrectData: isCorrectData }"
            ><IncorrectIcon />
        </span>
        <p class="error-text">{{ feedback }}</p>
    </div>
</template>

<script>
import CorrectIcon from '../../assets/icons/Correct';
import IncorrectIcon from '../../assets/icons/Incorrect';

export default {
    name: 'ErrorBox',
    props: ['feedback', 'isCorrectData'],
    components: {
        CorrectIcon,
        IncorrectIcon,
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    z-index: 1001;
    justify-content: flex-start;
    align-items: center;
    background: #202020;
    padding: 10px 12px;
    max-width: 190px;

    @media (min-width: $mobileL) {
        max-width: 205px;
    }

    @media (min-width: $laptop) {
        max-width: 220px;
    }

    & span svg {
        width: 25px;
        height: 25px;
        fill: #e44061;
        margin-right: 10px;

        @media (min-width: $mobileL) {
            width: 27px;
            height: 27px;
        }
        @media (min-width: $laptop) {
            width: 30px;
            height: 30px;
        }
    }
    & span.isCorrectData svg {
        fill: #91ed6d;
    }
}

.error-text {
    color: white;
    font-size: 15px;
    text-align: left;
    line-height: 1.1;

    @media (min-width: $mobileL) {
        font-size: 16px;
    }

    @media (min-width: $laptop) {
        font-size: 17px;
    }
}
</style>
