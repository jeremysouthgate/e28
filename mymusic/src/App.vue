////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  MyMusic™ Player
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  App

<template>
    <div id='app'>
        <router-view/>
        <nav-bar/>
    </div>
</template>

<script>

// Axios Fetch API
const axios = require('axios');

// Child Components
import NavBar from './components/NavBar.vue'

export default {
    name: 'app',
    components: {
        NavBar
    },
    data: function() {
        return {

        }
    },
    mounted: function() {
        axios.get("https://my-json-server.typicode.com/jeremysouthgate/mymusic/collections")
        .then(function(response){
            console.log(response);
        });
    }
}
</script>

<style>
#app
{
    width: 100%;
    height: calc(100vh + 110px);
    font-family: proxima-nova;
    position: absolute;
    top: 0;
}

a
{
    color: navy;
    text-decoration: none;
}
    a:hover
    {
        color: royalblue;
        text-decoration: underline;
    }

.noselect
{
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Opera and Firefox */
}
</style>
