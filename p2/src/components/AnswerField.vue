////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  Answer Field (Component)

<template>

    <div id='answer_field'>
        <label>Type the Note Letter: </label>
        <input id='answer' type='text' v-model="answer" maxlength="1" @keyup="check_answer"/>
    </div>

</template>


<script>
module.exports = {

    data: function () {
        return {
            answer: ""
        }
    },
    props: ["note_name"],
    methods: {
        check_answer: function() {

            // Return Correct
            if (this.note_name == this.answer.toLowerCase())
            {
                // Reset the Answer Field
                this.answer = "";

                this.$emit('answer-checked', "correct");
            }
            // Return Incorrect
            else
                this.$emit('answer-checked', "incorrect");
        }
    },
    template: "#answer-field"

}
</script>


<style>

    #answer_field
    {
        width: 100%;
        clear: both;
    }
        #answer
        {
            width: calc(100% - 2px);
            height: 50px;
            font-size: 25px;
            text-align: center;
            border: 1px solid #BBBBBB;
        }

</style>
