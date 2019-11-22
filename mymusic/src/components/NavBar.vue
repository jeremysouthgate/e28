////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  MyMusic™ Player
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  NavBar Component

<template>

    <footer>
        <h1>MYMUSIC™ Player</h1>
        <nav>
            <span @click='scroll_top' v-for='link in links' :key='link'>
                <router-link exact :to='{ name: link }'>{{ link }}</router-link>
            </span>
        </nav>
        <span id='legal'>Site &copy; &trade; J.C. Southgate.<br/>All rights reserved.</span>
        <div id='brand'></div>
    </footer>

</template>


<script>

export default {
    name: 'NavBar',
    data: function() {
        return {
            links: ['home', 'discover', 'play']
        }
    },
    methods: {
        scroll_top: function() {
            window.scrollTo(0, 0);
        }
    }
}

</script>


<style scoped>

    footer
    {
        width: 100%;
        height: 110px;
        background: #EAEAEA;
        position: absolute;
        top: 100vh;
    }
        h1
        {
            font-size: 30px;
            padding: 25px 10px 0px 15px;
            color: navy;
        }
            nav span
            {
                font-size: 15px;
                padding: 0 15px;
            }
        #legal
        {
            text-align: right;
            font-size: 10px;
            color: #BBBBBB;
            position: absolute;
            top: -35px;
            right: 15px;
        }
        #brand
        {
            background: navy;
            width: 80px;
            height: 80px;
            border-radius: 5px;
            position: absolute;
            top: 15px;
            right: 15px;
        }

</style>
