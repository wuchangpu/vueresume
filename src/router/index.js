import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Opus from '@/components/Opus.vue'
import Contact from '@/components/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/2',
      name: 'about',
      component: About
    },{
      path: '/3',
      name: 'skills',
      component: Skills
    },
    {
      path: '/4',
      name: 'experience',
      component: Experience
    },
    // {
    //   path: '/5',
    //   name: 'opus',
    //   component: Opus
    // },
    {
      path: '/5',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
