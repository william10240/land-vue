import VueRouter from 'vue-router'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '*', component: (resolve)=>require(['../views/App.vue'],resolve)
        }
    ]
  })


export default router;