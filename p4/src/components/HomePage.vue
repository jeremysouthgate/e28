////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  MyMusic™ Player
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  HomePage Component

<template>

    <div id='home'>
        <h1 id='title'>Jeremy C. Southgate</h1>
        <h2 id='subtitle'>Music Composition Portfolio</h2>
        <p id='description'>
            <b>Boston, MA</b>
        </p>
        <router-link id='start' exact :to='{ name: "Discover" }'>Click Here to Start Playing!</router-link>
    </div>

</template>


<script>

export default {
    name: 'HomePage'
}

</script>


<style scoped>

#home
{
    width: 100%;
    max-width: 800px;
    height: auto;
    min-height: 500px;
    color: black;
    margin: 0 auto;
}
    #title
    {
        text-align: center;
        font-size: 75px;
        margin-top: 100px;
    }
    #subtitle
    {
        text-align: center;
        font-size: 40px;
    }
    #description
    {
        margin-top: 50px;
        font-size: 20px;
        text-align: center;
        line-height: 2;
    }
    #start
    {
        display: block;
        position: relative;
        margin: 50px auto;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
    }

</style>
