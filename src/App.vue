<template>
    <div id="app">
        <Navbar />
        <router-view />
        <SubscribePanel />
        <Footer />
    </div>
</template>

<script>
import Navbar from './components/navbar/NavbarDeep';
import Footer from './components/footer/Footer';
import SubscribePanel from './components//subscribePanel/SubscribePanel';

export default {
    name: 'App',
    components: {
        Navbar,
        SubscribePanel,
        Footer,
    },
};
</script>

<style lang="scss">
@import './styles/reset.scss';

html {
    scroll-behavior: smooth;
}
#app {
    font-family: Quicksand, 'Lato', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(33, 33, 33);
}

ul {
    list-style-type: none;
}
</style>
