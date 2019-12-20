////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  MyMusic™ Player
//
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  DiscoverMenu Component

<template>

    <div id='Contact'>
        <h1>Contact</h1>
        <form action='' @submit.prevent='do_submit'>

            <!-- Name -->
            <label>Name</label>
            <input type='text' name='name' v-model='$v.name.$model'/>
            <error v-if='(!$v.name.required && $v.name.$dirty && $v.name.$error) ||
                            this.formHasErrors'>
                Your name is required.
            </error>

            <!-- E-Mail -->
            <label>Email</label>
            <input type='text' name='email' v-model='$v.email.$model'/>
            <error v-if='(!$v.email.required && $v.email.$dirty && $v.email.$error) ||
                            this.formHasErrors'>
                Your e-mail address is required.
            </error>
            <error v-if='!$v.email.email && $v.email.$dirty && $v.email.$error'>
                You must enter a valid e-mail.
            </error>

            <!-- Subject -->
            <label>Subj.</label>
            <input type='text' name='subject'/>

            <!-- Text/Message -->
            <label>Text</label>
            <textarea name='message' v-model='$v.text.$model'></textarea>
            <error v-if='(!$v.text.required && $v.text.$dirty && $v.text.$error) ||
                            this.formHasErrors'>
                A message is required.
            </error>

            <!-- Submit -->
            <input type='submit' value='Submit'/>

        </form>
    </div>

</template>


<script>

import { required, email } from 'vuelidate/lib/validators';

export default {
    name: 'ContactPage',
    data: function() {
        return {
            name: '',
            email: '',
            text: '',
            formHasErrors: false
        }
    },
    validations: {
        name: {
            required
        },
        email: {
            required,
            email
        },
        text: {
            required
        }
    },
    methods: {

        // Submit form after validation
        do_submit: function() {
            if (this.$v.$dirty && !this.$v.$anyError)
                document.querySelector('form').submit();
            else
                this.formHasErrors = true;
        }
    }
}
</script>


<style scoped>

h1
{
    font-size: 50px;
    text-align: center;
    margin-top: 100px;
}
form
{
    width: 100%;
    max-width: 500px;
    height: auto;
    margin: 0 auto;
}
    label
    {
        width: calc(100% - 10px);
        display: block;
        font-size: 25px;
        padding-left: 10px;
        margin-top: 25px;
    }
    input[type='text'], textarea
    {
        display: block;
        min-width: calc(100% - 20px);
        max-width: calc(100% - 20px);
        min-height: 30px;
        border: none;
        background: white;
        padding: 10px;
        font-size: 20px;
        font-family: proxima-nova;
    }
    input[type='submit']
    {
        width: 100%;
        height: 50px;
        display: block;
        border: none;
        cursor: pointer;
        margin-top: 50px;
        font-size: 20px;
    }
        input[type='submit']:hover
        {
            background: #BBBBBB;
        }
error
{
    color: red;
    display: block;
    margin-top: 5px;
}
</style>
