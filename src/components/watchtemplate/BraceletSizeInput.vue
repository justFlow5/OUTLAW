<template>
    <div>
        <label for="sizes"><slot>Bracelet size:</slot></label>
        <v-select
            class="style-chooser"
            :options="options"
            v-model="selected"
            placeholder="Select"
            :value="selectedCM"
        ></v-select>
    </div>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
    name: 'BraceletSizeInput',
    data() {
        return {
            options: [
                '13.00',
                '13.50',
                '14.00',
                '14.50',
                '15.00',
                '15.50',
                '16.00',
                '16.50',
                '17.00',
                '17.50',
                '18.00',
                '18.50',
                '19.00',
                '19.50',
                '20.00',
            ],
            selected: '',
        };
    },

    computed: {
        selectedCM() {
            return `${this.selected} centimeters`;
        },
    },
    components: {
        vSelect,
    },
};
</script>

<style lang="scss">
@import 'vue-select/src/scss/vue-select.scss';

label {
    color: #555;
    font-size: 12px;
    width: 100%;
    text-transform: uppercase;
    text-align: left;
    display: inline-block;

    @media (min-width: $mobileL) {
        font-size: 15px;
    }
}

.v-select {
    background-color: rgb(255, 255, 255);
    height: 50px;
    margin-top: 5px;
}

.vs__dropdown-toggle {
    height: 100%;
}

.vs__selected {
    height: 100%;
    @media (min-width: $mobileM) {
        height: unset;
    }
}

.style-chooser .vs__dropdown-menu {
    background: #363333 !important;
    border: none;
    cursor: pointer;
    &::-webkit-scrollbar {
        display: none;
    }
}

.style-chooser .vs__dropdown-option {
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        background: lighten(#363333, 15%);
        color: #daa520;
    }
}
</style>
