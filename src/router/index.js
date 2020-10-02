import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import WatchDetails from '../views/WatchDetails.vue';
import WatchCategoryGallery from '../views/WatchCategoryGallery.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path: '/:category',
        name: 'WatchCategoryGallery',
        component: WatchCategoryGallery,
        props: true,
    },

    {
        path: '/watches/:id',
        // name: 'WatchDetails',
        component: WatchDetails,
        props: true,
    },

    {
        path: '/:category/:id',
        // name: 'WatchDetails',
        component: WatchDetails,
        props: true,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;