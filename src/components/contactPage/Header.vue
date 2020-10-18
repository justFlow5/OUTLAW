<template>
    <div class="header-container">
        <h3>Hey there!</h3>
        <div class="subtitle-container">
            <hr />
            <h4>
                Have a question?
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style lang="scss" scoped>
.header-container {
    width: 100%;
    position: relative;
    text-align: left;

    & h3 {
        font-size: inherit;
        text-align: left;
        font-family: 'PT Serif', serif;
        color: #484848;
        font-size: 25px;
        @media (min-width: $mobileL) {
            font-size: 35px;
        }
        @media (min-width: $laptop) {
            font-size: 42px;
        }
    }
    & hr {
        border-top: 2px solid #d19e1f;
        width: 30%;
        display: inline-block;
        margin: 0 20px 0 50px;

        @media (min-width: $mobileL) {
            width: 15%;
        }

        @media (min-width: $laptop) {
            width: 9%;
            margin: 0 20px 0 80px;
        }
    }

    & h4 {
        font-size: inherit;
        font-family: 'PT Serif', serif;
        color: #d19e1f;
        font-size: 22px;
        font-size: 20px;
        white-space: nowrap;

        @media (min-width: $mobileL) {
            font-size: 26px;
        }

        @media (min-width: $laptop) {
            font-size: 38px;
            white-space: nowrap;
        }
    }
}

.subtitle-container {
    display: flex;
    /* justify-content: center; */
    margin-top: 15px;
    align-items: center;
}
</style>
