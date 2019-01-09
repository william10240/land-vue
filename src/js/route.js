import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/index', 
      component: (resolve) => require(['../views/index.vue'], resolve)
    },
    {
      path: '/t1', 
      component: (resolve) => require(['../views/t1.vue'], resolve)
    },
    {
      path: '/t2', 
      component: (resolve) => require(['../views/t2.vue'], resolve)
    },
    {
      path: '/t3', 
      component: (resolve) => require(['../views/t3.vue'], resolve)
    },
    {
      path: '/t4', 
      component: (resolve) => require(['../views/t4.vue'], resolve)
    },
    {
      path: '/t5', 
      component: (resolve) => require(['../views/t5.vue'], resolve)
    },
    {
      path: '/t6', 
      component: (resolve) => require(['../views/t6.vue'], resolve)
    },
    {
      path: '*', 
      //redirect: '/login'
      component: (resolve) => require(['../views/index.vue'], resolve)
    }
  ]
})


export default router;