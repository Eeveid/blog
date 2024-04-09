import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

    {
        path: '/',
        redirect: '/index'

    },
    {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/space',
        name: 'Space',
        component: () => import('@/views/space/index.vue'),
    },
    {
        path: '/information',
        name: 'Information',
        component: () => import('@/views/information/index.vue'),
    },
    {
        path: '/enroll',
        name: 'Enroll',
        component: () => import('@/views/enroll/index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router