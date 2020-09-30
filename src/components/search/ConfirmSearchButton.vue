<template>
    <div class="enterInput-button"><Arrow /></div>
</template>

<script>
import Arrow from '../../assets/icons/Arrow';
export default {
    name: 'ConfirmButton',
    components: {
        Arrow,
    },
};
</script>

<style lang="scss" scoped>
.enterInput-button {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    align-self: flex-end;
    justify-self: flex-end;
    transition: all 0.3s;
    background-color: #daa520;
    border: 2px solid transparent;
    width: 55px;
    height: 45px;
    margin-left: 15px;

    & > svg {
        position: relative;
        height: 36%;
        width: 36%;
        fill: white;
        transition: all 0.3s;
    }

    &:hover {
        background-color: white;
        border: 2px solid #daa520;

        & > svg {
            fill: #daa520;
        }
    }
}
</style>
