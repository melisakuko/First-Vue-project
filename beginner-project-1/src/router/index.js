import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue';
import HomeSection from '../components/HomeSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ContactSection from '../components/ContactSection.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeSection
  }, 
  {
    path: '/about',
    name: 'about',
    component: AboutSection
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactSection 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
