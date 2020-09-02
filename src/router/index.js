import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from "@/views/Add";
import Update from "@/views/Update";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/', component: Home, name: 'HomePage'
    },
    {
      path: '/add-new', component: Add, name: 'AddNewPage'
    },
    {
      path: '/:id/update', component: Update, name: 'UpdatePage'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
