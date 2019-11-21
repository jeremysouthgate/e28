////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  MyMusic™ Player
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  Media Player Component

<template>
    <div id='player' class='noselect'>

        <div id='artwork'>
            <img src='../../assets/MEDIA/lydia.png'/>
        </div>

        <div id='controls'>
            <div id='seek_bar' @mousedown='seek'>
                <div id='progress_bar'></div>
                <span>{{ time_elapsed }} / {{ duration }}</span>
            </div>
            <div id='buttons'>
                <button @click='playpause'>{{ playpause_button }}</button>
                <button @click='mute'>{{ mute_button }}</button>
            </div>
        </div>

        <video @loadedmetadata='on_load' @timeupdate='time_update'>
            <source src='../../assets/MEDIA/lydia.mp3'/>
        </video>

    </div>
</template>

<script>

// Axios Fetch API
const axios = require('axios');

// Moment.js (time-formatting)
let moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);
typeof moment.duration.fn.format === "function";
typeof moment.duration.format === "function";

export default {
    name: 'MmPlayer',
    components: {
        // Artwork
        // Controls
        // Video
    },
    data: function() {
        return {

            media_element: null,
            duration: null,
            time_elapsed: "00:00",
            mute_button: "Mute",
            playpause_button: "Play"

        }
    },
    methods: {

        mute: function() {
            if (!this.media_element.muted)
            {
                this.media_element.muted = true;
                this.mute_button = "Unmute";
            }
            else
            {
                this.media_element.muted = false;
                this.mute_button = "Mute";
            }
        },

        on_load: function() {
                this.duration = moment
                    .duration(this.media_element.duration, "seconds")
                    .format("mm:ss", {trim: false})
        },

        time_update: function() {

            let current_time = this.media_element.currentTime;

            localStorage.setItem("current_time", current_time);

            this.time_elapsed = moment
                .duration(current_time, "seconds")
                .format("mm:ss", {trim: false});

            let progress = 100 * (current_time / this.media_element.duration);

            document.querySelector("#progress_bar").style.width = progress + "%";

        },

        playpause: function() {
            if (this.media_element.paused)
            {
                this.media_element.play();
                this.playpause_button = "Pause";
                localStorage.setItem("playpause", "play");
            }
            else
            {
                this.media_element.pause();
                this.playpause_button = "Play";
                localStorage.setItem("playpause", "pause");
            }
        },

        seek: function(e) {

            // Seekbar Element
            let seekbar = document.querySelector("#seek_bar");

            // Get User Seek-input
            let px_offset = e.clientX - seekbar.getBoundingClientRect().left;
            let seekbar_width = seekbar.clientWidth;

            // New Playhead Position
            this.media_element.currentTime =
                px_offset/seekbar_width * this.media_element.duration;

        }

    },
    mounted: function() {

        this.media_element = document.querySelector("video");

        let current_time = localStorage.getItem('current_time');
        if (current_time)
            this.media_element.currentTime = current_time;




        axios.get("https://my-json-server.typicode.com/jeremysouthgate/e28/music")
        .then(function(response){
            console.log(response);
        });

    }
}
</script>

<style scoped>
#player
{
    width: 100%;
    height: 100%;
    position: relative;
}

    /* Audio */
    video
    {
        width: 100%;
    }

    /* Artwork */
    #artwork
    {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: black;
        position: relative;
        float: left;
    }
        #artwork img
        {
            width: auto;
            height: 100%;
        }

    /* Controls */
    #controls
    {
        background: rgba(255, 255, 255, .5);
        width: 100%;
        height: 50px;
        z-index: 1000;
        position: relative;
        float: left;
        top: -50px;
    }
        #seek_bar
        {
            cursor: pointer;
            background: rgba(0, 0, 33, .6);
            width: 100%;
            height: 20px;
            text-align: center;
        }
            #seek_bar span
            {
                color: white;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                display: inline-block;
            }
            #progress_bar
            {
                background: navy;
                width: 0;
                height: 100%;
            }
        #buttons
        {
            width: 200px;
            height: 30px;
            margin: 0 auto;
        }
            button
            {
                background: rgba(0, 0, 80, .75);
                border-radius: 25px;
                border: 2px solid rgba(0, 0, 66, .75);
                color: white;
                width: calc(50% - 4px);
                height: calc(100% - 4px);
                cursor: pointer;
                display: inline-block;
                position: relative;
                z-index: 100;
                margin: 2px;
            }
</style>
