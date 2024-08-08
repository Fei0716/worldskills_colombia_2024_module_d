import {createRouter, createWebHistory} from "vue-router";
import Home from './views/Home.vue';
import Country from './views/Country.vue';
import CountryInfo from './views/CountryInfo.vue';
import CountryMedal from './views/CountryMedal.vue';
import Discipline from './views/Discipline.vue';
import DisciplineInfo from './views/DisciplineInfo.vue';
import DisciplineCountry from './views/DisciplineCountry.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/countries',
        name: 'Country',
        component: Country,
    },
    {
        path: '/countries/:name',
        name: 'CountryInfo',
        component: CountryInfo,
    },
    {
        path: '/countries/:name/:medal',
        name: 'CountryMedal',
        component: CountryMedal,
    },
    {
        path: '/disciplines',
        name: 'Discipline',
        component: Discipline,
    },
    {
        path: '/disciplines/:discipline',
        name: 'DisciplineInfo',
        component: DisciplineInfo,
    },
    {
        path: '/disciplines/:discipline/:name',
        name: 'DisciplineCountry',
        component: DisciplineCountry,
    },
    //redirect to home page for any invalid routes
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;