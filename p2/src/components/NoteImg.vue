////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  Note Image (Component)

<template>

    <img id='note_img' :src="note_img" alt="A Musical Note"/>

</template>


<script>
module.exports = {

    props: ["note_img"],
    template: "#note-img"

}
</script>


<style>

    #note_img
    {
        display: flex;
        position: relative;
        float: left;
        justify-content: center;
        align-items: center;
    }
        #note_img
        {
            width: 300px;
            height: 300px;
        }

</style>
