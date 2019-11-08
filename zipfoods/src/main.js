// Modules
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

// Components
//import ShowHome from './components/ShowHome.vue';
//import ShowProducts from './components/ShowProducts.vue';
//import ShowCategories from './components/ShowCategories.vue';

// Router Instance
const router = new VueRouter({
    routes: routes
})

// Routes
Vue.use(VueRouter);
const routes = [
    //{ path: '/', component: ShowHome },
    //{ path: '/products', component: ShowProducts },
    //{ path: '/categories', component: ShowCategories }
]

// Vue Instance
new Vue({
    router:router,
    render: h => h(App),
}).$mount('#app')
Vue.config.productionTip = false
