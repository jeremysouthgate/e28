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
        <router-view id='page'/>

        <!-- Footer/Nav -->
        <nav-bar id='nav'/>

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
@media screen and (max-height: 500px)
{
    #app
    {
        height: auto !important;
    }
    #nav
    {
        position: relative !important;
        display: block !important;
        float: left !important;
        top: 0 !important;
    }
}
/* App Container */
#app
{
    background: #EAEAEA;
    width: 100%;
    height: calc(100vh);
    font-family: proxima-nova;
    position: absolute;
    top: 0;
}
    #page
    {
        width: 100%;
        height: auto;
        min-height: 500px;
        position: relative;
        display: block;
        float: left;
    }
    #nav
    {
        width: 100%;
        height: 110px;
        background: #EAEAEA;
        position: absolute;
        bottom: 0;
    }



/* Global Link Style */
a
{
    color: black;
    text-decoration: none;
}
    a:hover
    {
        color: #999999;
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
