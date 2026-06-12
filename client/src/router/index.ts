import { createRouter, createWebHistory } from 'vue-router'
import GearView from '../views/GearView.vue'
import ToursView from '../views/ToursView.vue'
import TourDetailView from '../views/TourDetailView.vue'

const routes = [
    { path: '/', redirect: '/tours' },
    { path: '/gear', component: GearView },
    { path: '/tours', component: ToursView },
    { path: '/tours/:id', component: TourDetailView },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})