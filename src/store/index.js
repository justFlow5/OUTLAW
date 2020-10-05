import Vue from 'vue';
import Vuex from 'vuex';
import appStore from './modules/appStore';
import userStore from './modules/userStore';
import productsStore from './modules/productsStore';
// import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    modules: {
        appStore,
        userStore,
        productsStore
    },
    // plugins: [createPersistedState()]
});