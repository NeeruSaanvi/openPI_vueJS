import {createWebHistory, createRouter} from "vue-router";
import Cockpit from "@/components/auth/TheCockpit.vue";
import OrganisationsList from "@/components/auth/OrganisationsList.vue";
import SinglePostItem from "@/components/auth/SinglePostItem.vue";
import LandingPageHomeView from "@/views/landingPage/HomeView.vue";
import LoginView from "@/views/landingPage/LoginView.vue";
import SignupView from "@/views/landingPage/SignupView.vue";
import store from "@/store";

const routes = [
    {
        path: '/',
        // component: AdminDashboard,
        component: LandingPageHomeView,
        name: 'home'
    },
    {
        path: '/cockpit',
        component: Cockpit,
        name: 'cockpit',
        meta: { requiresAuth: true },
    },
    {
        path: '/organisations',
        component: OrganisationsList,
        name: 'organisations',
        meta: { requiresAuth: true },
    },
    {
        path: '/organisation/:uuid',
        component: SinglePostItem,
        name: 'post',
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        component: LoginView,
        name: 'login'
    },
    {
        path: '/signup',
        component: SignupView,
        name: 'signup',
        meta: { guest: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        if (store.getters.isAuthenticated) {
            next("/cockpit");
            return;
        }
        next();
    } else {
        next();
    }
});

export default router;