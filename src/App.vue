<template>
    <div id="app">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from './components/navbar/NavbarDeep';

export default {
    name: 'App',
    components: {
        Navbar,
    },
};
</script>

<style lang="scss">
@import './styles/reset.scss';

html {
    scroll-behavior: smooth;
}
#app {
    font-family: 'Lato', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(33, 33, 33);
}
</style>
