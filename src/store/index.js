import Vue from 'vue';
import Vuex from 'vuex';
import appStore from './modules/appStore';
import userStore from './modules/userStore';
import productsStore from './modules/productsStore';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    modules: {
        appStore,
        userStore,
        productsStore
    },
});