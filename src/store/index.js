import Vue from 'vue';
import Vuex from 'vuex';
import appStore from './modules/appStore';
import productsStore from './modules/productsStore';
import userStore from './modules/userStore';


import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    modules: {
        appStore,
        productsStore,
        userStore,

    },
    plugins: [createPersistedState()],
});