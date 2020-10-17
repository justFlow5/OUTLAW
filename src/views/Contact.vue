<template>
    <div class="form-container"><InputField /></div>
</template>

<script>
import InputField from '../components/contactPage/InputField';
export default {
    name: 'ContactPage',
    components: {
        InputField,
    },
};
</script>

<style lang="scss" scoped>
.form-container {
    width: 50%;
    margin: 20% auto;
}
</style>
