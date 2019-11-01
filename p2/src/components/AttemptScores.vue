////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  Attempt Scores (Component)

<template>

    <div id='score'>
        <b v-bind:class="{is_correct : is_correct}">Correct </b><span>{{ correct }}</span><br />
        <b v-bind:class="{is_incorrect : is_incorrect}">Incorrect </b><span>{{ incorrect }}</span><br />
        <b>Average</b><span>{{ average }}</span>
    </div>

</template>


<script>
module.exports = {

    props: [
        "correct",
        "is_correct",
        "incorrect",
        "is_incorrect",
        "average"
    ],
    template: "#attempt-scores"

}
</script>


<style>

    /* Responses */
    .is_correct
    {
        color: green;
    }
    .is_incorrect
    {
        color: red;
    }

    /* Layout */
    #score
    {
        color: #BBBBBB;
        opacity: .5;
        margin-bottom: 25px;
    }
        #score b
        {
            width: 100px;
            display: inline-block;
        }

</style>
