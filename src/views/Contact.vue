<template>
    <div class="contactPage-container">
        <Header></Header>
        <div class="form-container">
            <div class="direction">
                <InputField
                    :text="form.name"
                    label="Name"
                    inputType="input"
                    textFieldType="name"
                    @input-update="updateForm"
                />
                <InputField
                    :text="form.email"
                    label="Email"
                    inputType="input"
                    textFieldType="email"
                    @input-update="updateForm"
                />
            </div>
            <InputField
                :text="form.title"
                label="Title"
                inputType="input"
                textFieldType="title"
                @input-update="updateForm"
            />
            <InputField
                :text="form.message"
                label="Message"
                inputType="textarea"
                textFieldType="message"
                @input-update="updateForm"
            />

            <SendButton @send-message="handleRequest" />
            <div
                class="error-container"
                :class="{
                    isCorrectData: isCorrectData,
                    isFeedbackShown: isFeedbackShown,
                }"
            >
                <ErrorBox
                    :feedback="errorText"
                    :isCorrectData="isCorrectData"
                />
            </div>
        </div>
    </div>
</template>

<script>
import InputField from '../components/contactPage/InputField';
import Header from '../components/contactPage/Header';
import ErrorBox from '../components/contactPage/ErrorBox';
import SendButton from '../components/contactPage/SendButton';

import { mapActions } from 'vuex';

export default {
    name: 'ContactPage',
    data() {
        return {
            form: {
                name: '',
                email: '',
                title: '',
                message: '',
            },
            errorText: '',
            isCorrectData: false,
            isFeedbackShown: false,
        };
    },

    methods: {
        ...mapActions({
            toggleNavbarTheme: 'appStore/toggleNavbarTheme',
        }),

        updateForm({ textFieldType, content }) {
            this.form[textFieldType] = content;
        },

        validateEmail(mail) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                mail
            );
        },

        validateForm() {
            return this.form.name && this.form.title && this.form.message;
        },

        handleRequest() {
            this.isFeedbackShown = true;
            if (!this.validateEmail(this.form.email)) {
                this.errorText = 'Insert a valid email address please';
                this.isCorrectData = false;
                return;
            }

            if (this.validateForm()) {
                this.errorText = 'Request sent';
                this.isFeedbackShown = false;
                this.form.name = '';
                this.form.email = '';
                this.form.title = '';
                this.form.message = '';
                this.isCorrectData = true;
            } else {
                this.errorText = 'All fields are required';
                this.isCorrectData = false;
            }
        },
    },
    watch: {
        isCorrectData: function(newVal) {
            if (newVal) {
                setTimeout(() => {
                    this.isCorrectData = false;
                    this.errorText = '';
                }, 4000);
            }
        },
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
        ErrorBox,
        SendButton,
    },
};
</script>

<style lang="scss" scoped>
.contactPage-container {
    width: 80%;
    margin: 0 auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin-top: 60px;

    @media (min-width: $mobileL) {
        width: 60%;
        margin-top: 90px;
    }

    @media (min-width: $tablet) {
        width: 50%;
    }

    @media (min-width: $laptop) {
        width: 45%;
        margin-top: 50px;
    }
}
.form-container {
    margin-top: 10px;
    position: relative;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media (min-width: $mobileL) {
        margin-top: 20px;
    }

    @media (min-width: $laptop) {
        margin-top: 50px;
    }
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

.error-container {
    position: fixed;
    top: 17%;
    right: 0;
    opacity: 0;
    transform: translateX(100%);

    transition: all 0.3s ease-in-out 3s;

    @media (min-width: $laptop) {
        top: unset;
        bottom: 5%;
        right: 20px;
    }

    &.isFeedbackShown {
        opacity: 1;
        transform: translateX(0);

        transition: all 0.3s ease-in-out;
    }

    &.isFeedbackShown.isCorrectData {
        transform: translateX(100%);
        opacity: 0;
    }
}
</style>
