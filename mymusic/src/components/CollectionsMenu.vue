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
            <span>{{ track.collection.title }} ({{ track.collection.type }}) by {{ track.collection.artist }}</span>
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
    margin: 0 auto;
    margin-top: 100px;
    color: navy;
}
    #collections h1
    {
        font-size: 50px;
        text-align: center;
    }
    #collections span
    {
        font-size: 20px;
    }

</style>
