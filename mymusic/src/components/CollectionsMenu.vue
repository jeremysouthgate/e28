////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  MyMusic™ Player
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  CollectionsMenu Component

<template>
    <div id='collections'>
        <h1>Collections</h1>
        <div v-for="track in response" :key="track.id">
            {{ track.collection }}
        </div>
    </div>
</template>

<script>
// Axios Fetch API
const axios = require('axios');

export default {
    name: 'CollectionsMenu',
    data: function() {
        return {
            response: 123
        }
    },
    methods: {

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
#collections
{
    width: 800px;
}
</style>
