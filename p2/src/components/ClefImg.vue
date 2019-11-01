////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  Clef Image (Component)

<template>

    <div id='clef_img' v-html="clef_symbol">
        {{ clef_symbol }}
    </div>

</template>


<script>
module.exports = {

    props: ["clef_symbol"],
    template: "#clef-img"

}
</script>


<style>

    #clef_img
    {
        display: flex;
        position: relative;
        float: left;
        justify-content: center;
        align-items: center;
    }
        #clef_img
        {
            width: 200px;
            height: 300px;
            font-size: 150px;
        }

</style>
