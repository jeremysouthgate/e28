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

        <!-- Content -->
        <router-view/>

        <!-- Footer/Nav -->
        <nav-bar/>

    </div>

</template>


<script>

// Child Components
import NavBar from './components/NavBar.vue'

export default {
    name: 'app',
    components: {
        NavBar
    }
}

</script>


<style>

/* App Container */
#app
{
    width: 100%;
    height: calc(100vh + 110px);
    font-family: proxima-nova;
    position: absolute;
    top: 0;
}

/* Global Link Style */
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

/* Global NoSelect Style */
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
