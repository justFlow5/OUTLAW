<template>
    <div class="input-wrapper">
        <input
            placeholder="Search"
            spellcheck="false"
            autocorrect="off"
            type="text"
            v-model="text"
        />
        <div
            class="deleteInput-button"
            :class="{ show: isInputFilled }"
            @click="deleteText"
        >
            <DeleteIcon />
        </div>
    </div>
</template>

<script>
import DeleteIcon from '../../assets/icons/Delete';
export default {
    name: 'SearchInput',
    data() {
        return {
            text: '',
        };
    },

    computed: {
        isInputFilled() {
            return this.text.length > 0;
        },
    },

    methods: {
        deleteText() {
            this.text = '';
        },
    },

    components: {
        DeleteIcon,
    },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
    position: relative;
    width: 100%;

    & input {
        position: relative;
        padding-right: 50px;
        width: 100%;
        outline: none;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 1px solid rgb(212, 212, 212);
        background-color: transparent;
        height: 37px;
        font-weight: 200;
        font-size: 24px;
        color: rgb(33, 33, 33);
    }
}

.deleteInput-button {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    align-self: flex-end;
    justify-self: flex-end;
    display: none;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    position: absolute;
    right: 10px;
    width: 18px;
    height: 18px;
    background-color: gray;
    transition: all 0.3s;

    &.show {
        display: inline-block;
    }

    & svg {
        fill: white;
        position: relative;
        width: 50%;
        height: 50%;
    }

    &:hover {
        background-color: #daa520;

        & svg {
            fill: white;
        }
    }
}
</style>
