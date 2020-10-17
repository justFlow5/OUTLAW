<template>
    <div class="contactPage-container">
        <Header></Header>
        <div class="form-container">
            <div class="direction">
                <InputField v-model="name" label="Name" inputType="input" />
                <InputField v-model="email" label="Email" inputType="input" />
            </div>
            <InputField v-model="title" label="Title" inputType="input" />
            <InputField
                v-model="content"
                label="Message"
                inputType="textarea"
            />
        </div>
    </div>
</template>

<script>
import InputField from '../components/contactPage/InputField';
import Header from '../components/contactPage/Header';

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
        const currentURL = this.$route.name;
        if (currentURL) this.toggleNavbarTheme(true);
    },

    beforeDestroy() {
        this.toggleNavbarTheme(false);
    },

    components: {
        InputField,
        Header,
    },
};
</script>

<style lang="scss" scoped>
.contactPage-container {
    width: 45%;
    margin: 0 auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}
.form-container {
    margin-top: 50px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
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
