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
import App from './App.vue'
import VueRouter from 'vue-router';

// Components
import HomePage from './components/HomePage.vue';
import CollectionsMenu from './components/CollectionsMenu.vue';
import MmPlayer from './components/MyMusicPlayer/MmPlayer.vue';


/*
 *  Routing
 */

Vue.use(VueRouter);

// Set Routes
const routes = [
    { path: '/', component: HomePage, name: 'Home' },
    { path: '/collections', component: CollectionsMenu, name: 'Discover' },
    { path: '/play', component: MmPlayer, name: 'Play' },
    { path: '/discover', redirect: '/collections'},
    { path: '*', redirect: '/'}
]

const router = new VueRouter({
    routes: routes
});


/*
 *  The Vue Instance/Object
 */

// Configs
Vue.config.productionTip = false

// Object
new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')
