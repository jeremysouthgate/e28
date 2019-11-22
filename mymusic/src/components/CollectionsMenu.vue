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
    </div>
</template>

<script>
// Axios Fetch API
const axios = require('axios');

export default {
    name: 'CollectionsMenu',
    data: function() {
        return {

        }
    },
    methods: {

    },
    mount: function() {

        axios.get("https://my-json-server.typicode.com/jeremysouthgate/e28/music")
        .then(function(response){
            alert(response.data);
        });

    }
}
</script>

<style scoped>

</style>
