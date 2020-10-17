import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import WatchDetails from '../views/WatchDetails.vue';
import WatchCategoryGallery from '../views/WatchCategoryGallery.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },

    {
        path: '/:category',
        name: 'WatchCategoryGallery',
        component: WatchCategoryGallery,
        props: true,
    },

    {
        path: '/watches/:id',
        component: WatchDetails,
        props: true,
    },

    {
        path: '/:category/:id',
        component: WatchDetails,
        props: true,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
