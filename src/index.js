import Vue from 'vue';
import App from './views/App.vue';
// import Vuex from 'vuex'
import VueRouter from 'vue-router'
// import routeConfig from './js/route.js'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: '*', component: (resolve)=>require(['./views/App.vue'],resolve)
        }
    ]
  })

// console.log(router);
new Vue({
    router,
    render:(h)=>h(App)
}).$mount('#app');