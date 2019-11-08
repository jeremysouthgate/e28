<template>
    <div id="app">
        <img id='logo' alt="Zipfoods logo" src="./assets/images/zipfoods-logo.png">
        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <a href='#' @click='page = link'>{{ link }}</a>
                </li>
            </ul>
        </nav>
        <component :is='linkComponents[page]'></component>
    </div>
</template>

<script>
import ShowHome from './components/ShowHome.vue';
import ShowCategories from './components/ShowCategories.vue';
import ShowProducts from './components/ShowProducts.vue';
import {products} from './products.js';

export default {
  name: 'app',
  components: {
      ShowHome,
      ShowProducts,
      ShowCategories
  },
  data: function() {
      return {
          page: 'home',
          links: ['home', 'products', 'categories'],
          linkComponents: {
              home: 'ShowHome',
              products: 'ShowProducts',
              categories: 'ShowCategories'
          },
          products: products
      }
  }
}
</script>

<style>
    @import "./assets/css/zipfoods.css";
</style>
