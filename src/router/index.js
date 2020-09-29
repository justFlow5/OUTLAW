import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Watches from '../views/Watches.vue';
import WatchDetails from '../views/WatchDetails.vue';
import WatchCategoryGallery from '../views/WatchCategoryGallery.vue'

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },

    {
        path: '/watches',
        name: 'Watches',
        component: Watches,
    },

    {
        path: '/watches/:category',
        name: 'WatchCategoryGallery',
        component: WatchCategoryGallery,
        props: true
    },

    {
        path: '/watches/:category/:id',
        component: WatchDetails
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