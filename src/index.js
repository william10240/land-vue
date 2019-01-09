import Vue from 'vue';
import App from './App.vue';
import router from './js/route.js';
// import './assets/plugins/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import $ from 'jquery'
import 'bootstrap3/dist/css/bootstrap.min.css'
import 'bootstrap3/dist/js/bootstrap.min'


new Vue({
    router:router,
    render: h => {
        return h(App);
    }
}).$mount("#app");