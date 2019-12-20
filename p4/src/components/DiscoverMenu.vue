////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  MyMusic™ Player
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  DiscoverMenu Component

<template>

    <div id='discover'>

        <h1>Tracklist</h1>

        <div v-for="track in response" :key="track.id">

            <router-link exact :to='{ path: "/play/" + track.collection.title.toLowerCase() }'>{{ track.collection.title }}</router-link>

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

#discover
{
    background: pink;
    width: 100%;
    height: 100%;
    position: relative;
}
    #discover > h1
    {
        font-size: 50px;
        color: red;
    }

</style>
