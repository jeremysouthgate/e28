////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  MyMusic™ Player
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  Main Vue Instance


/*
 *  Imports
 */

// Modules
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import App from './App.vue'


// Components
import HomePage from './components/HomePage.vue';
import DiscoverMenu from './components/DiscoverMenu.vue';
import MmPlayer from './components/MyMusicPlayer/MmPlayer.vue';
import ContactPage from './components/ContactPage.vue';

// Configs
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex)
Vue.use(Vuelidate)


/*
 *  Routing
 */

// Set Routes
const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/contact', component: ContactPage, name: 'Contact' },
    { path: '/discover', component: DiscoverMenu, name: 'Discover' },
    { path: '/play/:id', component: MmPlayer },
    { path: '/play', redirect: '/play/creativity', name: 'Play' },
    { path: '*', redirect: '/'}
]

// Router Obj
const router = new VueRouter({
    routes: routes,
    mode: 'history'
});


/*
 *  VueX Store
 */
const store = new Vuex.Store({
    state: {
        track: null
    },
    mutations: {

        // Sets track_name from url "id" param
        set_track(state, payload) {
            state.track = payload;
        }

    }
})


/*
 *  The Vue Instance/Object
 */

// Object
new Vue({
    store: store,
    router: router,
    render: h => h(App),
}).$mount('#app')
