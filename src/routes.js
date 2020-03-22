import VueRouter from 'vue-router'
import Vue from 'vue'

import MainPage from './pages/MainPage'
import RepoPage from './pages/RepoPage'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: MainPage },
    { path: '/repos', component: RepoPage }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router