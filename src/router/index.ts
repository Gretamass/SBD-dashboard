import { createRouter, createWebHistory } from 'vue-router';
import { Route } from '@/router/models/enumerators';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: Route.DASHBOARD,
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/games-list',
            name: Route.GAMES_LIST,
            component: () => import('@/views/GamesList.vue')
        }
    ]
});

export default router;
