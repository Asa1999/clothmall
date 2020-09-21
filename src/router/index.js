import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home')
const Car = () => import('../views/car/car')
const Type = () => import('../views/type/type')
const My = () => import('../views/my/my')
const Detail = () => import('../views/detail/Detail')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/type',
    component: Type
  },
  {
    path: '/my',
    component: My
  },
	{
	  path: '/detail/:iid',
	  component: Detail
	}
]
const router = new Router({
  routes,
  mode:'history'
})

export default router