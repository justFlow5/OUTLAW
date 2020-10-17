<template>
    <div class="header-container">
        <h3>Hey there</h3>
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

    & h3 {
        font-size: 47px;
        text-align: left;
        font-family: 'PT Serif', serif;
        color: #484848;
    }
    & hr {
        border-top: 2px solid #d19e1f;
        width: 9%;
        display: inline-block;
        margin: 0 20px 0 80px;
    }

    & h4 {
        font-size: 47px;
        font-family: 'PT Serif', serif;
        color: #d19e1f;
        white-space: nowrap;
    }
}

.subtitle-container {
    display: flex;
    /* justify-content: center; */
    margin-top: 15px;
    align-items: center;
}
</style>
