import Vue from 'vue'
import VueRouter from 'vue-router'
const Main = ()=> import('../views/Main')
const PdfDetail = ()=> import('../views/PdfDetail')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },{
      path: '/detail',
      name: 'PdfDetail',
      component: PdfDetail
    }
]

const router = new VueRouter({
  routes
})

export default router
