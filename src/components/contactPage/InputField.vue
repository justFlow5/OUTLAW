<template>
    <div class="form__group field">
        <input
            v-if="inputType === 'input'"
            type="input"
            class="form__field"
            placeholder="Name"
            name="name"
            :id="label"
            required
            autocomplete="off"
            v-on:input="$emit('input', $event.target.value)"
        />

        <textarea
            v-else
            type="input"
            class="form__field"
            placeholder="Name"
            name="name"
            :id="label"
            rows="4"
            required
            autocomplete="off"
            v-on:input="$emit('input', $event.target.value)"
        />
        <label :for="label" class="form__label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: ['inputType', 'text', 'label'],
};
</script>

<style lang="scss" scoped>
$primary: #000000;
$secondary: #696969;
$white: #fff;
$gray: #9b9b9b;
.form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;

    & textarea {
        resize: none;
    }
}

.form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 18px;
    color: black;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.3s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ .form__label {
        font-size: 18px;
        cursor: text;
        top: 20px;
    }
}

.form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
}

.form__field:focus {
    ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 14px;
        color: $primary;
        font-weight: 700;
    }
    padding-bottom: 7px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary, $secondary);
    border-image-slice: 1;
}
/* reset input */
.form__field {
    &:required,
    &:invalid {
        box-shadow: none;
    }
}
</style>
