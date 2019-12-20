////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  MyMusic™ Player
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  DiscoverMenu Component

<template>

    <div id='discover_page'>

        <h1 id='title'>Tracklist</h1>

        <div v-for="track in response" :key="track.id">

            <router-link class='tracks' exact :to='{ path: "/play/" + track.title.toLowerCase() }'>{{ track.title }}</router-link>

        </div>

    </div>

</template>


<script>

// Axios Fetch API
const axios = require('axios');

export default {
    name: 'DiscoverMenu',
    data: function() {
        return {
            response: null
        }
    },
    mounted: function() {

        axios
            .get(
                'https://my-json-server.typicode.com/jeremysouthgate/e28/music'
            )
            .then(response => {
                this.response = response.data;
            });

    }
}
</script>


<style scoped>

#discover_page
{
    width: calc(100% - 100px);
    height: 100%;
    position: relative;
    padding: 50px;
}
    #title
    {
        font-size: 50px !important;
        margin-top: 100px;
        text-align: center;
        font-size: 50px;
    }
    .tracks
    {
        position: relative;
        display: block;
        margin: 0 auto;
        text-align: center;
        font-size: 40px;
        line-height: 1.5;
    }

</style>
