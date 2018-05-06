import Index from '../views/index.vue'
import List from '../views/list.vue'


export default [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/list/:id',
    props: true,
    component: List,
  }
]