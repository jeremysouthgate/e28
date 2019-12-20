////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  MyMusic™ Player
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  Media Player Component

<template>

    <!-- Media Player -->
    <div id='player' class='noselect'>

        <!-- Artwork -->
        <div id='artwork'>
            <img
                :src='artwork_src'
                alt='Audio Track Artwork'
            />
        </div>

        <!-- Controls -->
        <div id='controls'>
            <div id='seek_bar' @mousedown='seek'>
                <div id='progress_bar'></div>
                <span>{{ time_elapsed }} / {{ duration }}</span>
            </div>
            <div id='buttons'>
                <button @click='prev'>Prev</button>
                <button @click='restart'>Restart</button>
                <button @click='playpause'>{{ playpause_button }}</button>
                <button @click='mute'>{{ mute_button }}</button>
                <button @click='next'>Next</button>
            </div>
        </div>

        <!-- Audio -->
        <audio
            @loadedmetadata='on_load'
            @timeupdate='time_update'
            @ended='ended'
        >
            <source :src='audio_src'/>
        </audio>

    </div>

</template>


<script>

// Moment.js (time-formatting)
let moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);
typeof moment.duration.fn.format === "function";
typeof moment.duration.format === "function";

export default {
    name: 'MmPlayer',
    data: function() {
        return {
            publicPath: process.env.BASE_URL,
            no_art: "./MEDIA/no_art.png",
            artwork_src: null,
            audio_src: null,
            media_obj: null,
            duration: null,
            time_elapsed: "00:00",
            mute_button: "Mute",
            playpause_button: "Play"
        }
    },
    methods: {

        on_load: function() {

            this.duration = moment
                .duration(this.media_obj.duration, "seconds")
                .format("mm:ss", {trim: false})

        },

        time_update: function() {

            let current_time = this.media_obj.currentTime;

            localStorage.setItem("current_time", current_time);

            this.time_elapsed = moment
                .duration(current_time, "seconds")
                .format("mm:ss", {trim: false});

            let progress = 100 * (current_time / this.media_obj.duration);

            document.querySelector("#progress_bar").style.width = progress + "%";

        },

        prev: function() {

        },

        restart: function() {
            this.media_obj.currentTime = 0;
        },

        playpause: function() {
            if (this.media_obj.paused)
            {
                this.media_obj.play();
                this.playpause_button = "Pause";
                localStorage.setItem("playpause", "play");
            }
            else
            {
                this.media_obj.pause();
                this.playpause_button = "Play";
                localStorage.setItem("playpause", "pause");
            }
        },

        // Mute Audio
        mute: function() {
            if (!this.media_obj.muted)
            {
                this.media_obj.muted = true;
                this.mute_button = "Unmute";
            }
            else
            {
                this.media_obj.muted = false;
                this.mute_button = "Mute";
            }
        },

        next: function() {

        },

        seek: function(e) {

            // Seekbar Element
            let seekbar = document.querySelector("#seek_bar");

            // Get User Seek-input
            let px_offset = e.clientX - seekbar.getBoundingClientRect().left;
            let seekbar_width = seekbar.clientWidth;

            // New Playhead Position
            this.media_obj.currentTime =
                px_offset/seekbar_width * this.media_obj.duration;

        },

        ended: function() {
            this.media_obj.currentTime = 0;
            this.playpause_button = "Play";
        }

    },
    mounted: function() {

        // Setup Artwork & Audio
        this.media_obj = document.querySelector("audio");

        // Set current time to last
        let current_time = localStorage.getItem('current_time');
        if (current_time)
            this.media_obj.currentTime = current_time;

        // Use Route Param to set which Track to play
        if (this.$route.params.id)
        {
            this.$store.commit("set_track", this.$route.params.id);
            this.artwork_src = this.publicPath + "MEDIA/" + this.$store.state.track + ".png";
            this.audio_src = this.publicPath + "MEDIA/" + this.$store.state.track + ".mp3";

        }
    }
}
</script>


<style scoped>

#player
{
    width: 100%;
    height: 100%;
    position: relative;
    background: black;
}
    /* Audio */
    audio
    {
        width: 100%;
    }

    /* Artwork */
    #artwork
    {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background: black;
        position: relative;
        float: left;
        margin-top: 100px;
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
        height: auto;
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
            height: 50px;
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
                padding-top: 15px;
            }
            #progress_bar
            {
                background: black;
                width: 0;
                height: 100%;
            }
        #buttons
        {
            width: 100%;
            height: 50px;
            margin: 0 auto;
        }
            button
            {
                background: rgba(40, 40, 40, .75);
                border-radius: 25px;
                border: 2px solid rgba(66, 66, 66, .75);
                color: white;
                width: calc(20% - 4px);
                height: calc(100% - 4px);
                cursor: pointer;
                display: inline-block;
                position: relative;
                float: left;
                z-index: 100;
                margin: 2px;
            }

</style>
