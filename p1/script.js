////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//  HES DGMD E-28 Vue.js
//  Project 1
//
//  By: Jeremy C. Southgate (jes4532@g.harvard.edu)
//
////////////////////////////////////////////////////////////////////////////////
//  VUE SCRIPT


// Vue instance
let app = new Vue({
    el: "main",
    data: {
        clef: null,
        note_img: null,
        note_name: null,
        answer: null,
        is_correct: false,
        is_incorrect: false,
        correct: 0,
        incorrect: 0,
        attempts: 0
    },
    computed:
    {
        // Compute Score Average
        average: function()
        {
            if (this.attempts > 0)
                return Math.floor(this.correct / this.attempts * 100) + "%";
        }
    },
    methods:
    {
        // Select a Clef
        clef_selected: function(clef)
        {
            // Save the Clef
            this.clef = clef;

            // Load New Flashcard
            this.new_flashcard();

        },


        // Check an Answer
        check_answer: function()
        {
            if (event.key != "Shift")
            {
                // Log the Attempt
                this.attempts++;

                // Correct
                if (this.note_name == this.answer.toLowerCase())
                {
                    this.is_correct = true;
                    this.is_incorrect = false;
                    this.correct++;
                    this.new_flashcard();
                }
                // Incorrect
                else
                {
                    this.is_correct = false;
                    this.is_incorrect = true;
                    this.incorrect++;
                }
            }
        },


        // New Flashcard
        new_flashcard: function()
        {
            // Reset the Answer Field
            this.answer = "";

            // Get First Note at Random
            let note_id = Math.floor(Math.random() * 27) - 13;

            // Calculate Note's Offset from Middle of Staff
            let offset;
            switch (this.clef)
            {
                    case 'G': offset = 1; break;
                    case 'F': offset = 3; break;
                    case 'C': offset = 2; break;
            }

            // Calc & Set Note Name
            this.note_name = musical_alphabet[(offset + note_id + 14)%7];

            // Show the Note Image
            if (note_id > 0) note_id = "+" + note_id;
            this.note_img = "./notes/" + note_id + ".png";

        }
    }

});


// The Musical Alphabet
let musical_alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
