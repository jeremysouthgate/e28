<template>
    <div id="app">
        <img id='logo' alt="Zipfoods logo" src="./assets/images/zipfoods-logo.png">
        <p>
            “ZipFoods is your one-stop-shop for convenient online grocery shopping in the greater Boston area.”
        </p>
        <show-featured :products='products'></show-featured>
        <show-products :products='products'></show-products>
    </div>
</template>

<script>
import ShowProducts from './components/ShowProducts.vue';
import ShowFeatured from './components/ShowFeatured.vue';
import {products} from './products.js';
export default {
  name: 'app',
  components: {
      ShowProducts,
      ShowFeatured
  },
  data: function() {
      return {
          products: products
      }
  }
}
</script>

<style>
    @import "./assets/css/zipfoods.css";
</style>
