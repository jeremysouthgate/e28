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
        <h1 id='title'>MYMUSIC™ Player</h1>
        <h1 id='subtitle'>The Future of Music is Wide Open.</h1>
        <p id='description'>
            <b>MyMusic</b> is <u>a site for all Artists</u> to upload their original music and have it played.
            We believe the true future of music is DRM-Free. Thus, all music here is meant to be shared &
            enjoyed by as many people as possible. We trust you will support the artists you like! ;)
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
    width: 800px;
    height: auto;
    color: navy;
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
        text-indent: 50px;
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
