import Vue from 'vue'
import VueRouter from 'vue-router'
import Rus from '../views/Rus.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Rus',
    component: Rus
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router