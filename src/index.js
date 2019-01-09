import Vue from 'vue';
import App from './App.vue';
import router from './js/route.js'


new Vue({
    router:router,
    render: h => {
        return h(App);
    }
}).$mount("#app");