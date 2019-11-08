<template>
    <div id="app">
        <img id='logo' alt="Zipfoods logo" src="./assets/images/zipfoods-logo.png">
        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link :to='paths[link]'>{{ link }}</router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
        links: ['home', 'products', 'categories'],
        paths: {
            home: '/',
            products: '/products',
            categories: '/categories'
        }
    }
  }
}
</script>

<style>
    @import "./assets/css/zipfoods.css";
</style>
