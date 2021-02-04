import Vue from 'vue'
import VueRouter from 'vue-router'
import Rus from '../views/Rus.vue'
import Usa from '../views/Usa.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Rus',
        component: Rus
    },
    {
        path: '/ru',
        name: 'Rus',
        component: Rus
    },
    {
        path: '/us',
        name: 'Usa',
        component: Usa
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router