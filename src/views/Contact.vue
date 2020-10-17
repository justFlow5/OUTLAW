<template>
    <div class="form-container">
        <div class="direction">
            <InputField v-model="name" label="Name" inputType="input" />
            <InputField v-model="email" label="Email" inputType="input" />
        </div>
        <InputField v-model="title" label="Title" inputType="input" />
        <InputField v-model="content" label="Message" inputType="textarea" />
    </div>
</template>

<script>
import InputField from '../components/contactPage/InputField';
import { mapActions } from 'vuex';

export default {
    name: 'ContactPage',
    data() {
        return {
            name: '',
            email: '',
            title: '',
            content: '',
        };
    },

    methods: {
        ...mapActions({
            toggleNavbarTheme: 'appStore/toggleNavbarTheme',
        }),
    },

    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log('this.$route: ', this.$route.name);
        const currentURL = this.$route.name;
        if (currentURL) this.toggleNavbarTheme();
    },

    beforeDestroy() {
        this.toggleNavbarTheme();
    },

    components: {
        InputField,
    },
};
</script>

<style lang="scss" scoped>
.form-container {
    width: 35%;
    margin: 15% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;

    & > div {
        flex: 1;
    }
}

.direction {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: $laptop) {
        flex-direction: row;
        justify-content: space-between;

        & > div {
            flex: 1;
        }

        & > *:first-child {
            margin-right: 50px;
        }
    }
}
</style>