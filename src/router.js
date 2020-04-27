import Vue from 'vue';
import Router from 'vue-router';
import Home  from '@/components/Home';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/characters',
            component: () => import('./components/Characters/Characters')
        },
        {
            path: '/planets',
            component: () => import('./components/Planets/Planets')
        },
        {
            path: '/species',
            component: () => import('./components/Species/Species')
        },
        {
            path: '/starships',
            component: () => import('./components/Starships/Starships')
        }
    ]
})