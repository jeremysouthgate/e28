////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//
//	A "Rock, Paper, Scissors" Game Program
//	Author: Jeremy C. Southgate
//	E-Mail: jes4532@g.harvard.edu
//
////////////////////////////////////////////////////////////////////////////////

// Wait for DOM Load
document.addEventListener("DOMContentLoaded", () => {

    // Declare Variables to Track Game Progress
    let wins = 0, losses = 0, ties = 0;
    let outcome;

    // Listen for User Click on Button Option. On click...
    let options = document.querySelectorAll("button");
    options.forEach((i) => {
        i.addEventListener("click", () => {

            // Get ID (1-3) of Button which User clicked
            let user_plays = parseInt(i.id);

            // Genearate random ID (1-3) to Simulate Computer Play
            let computer_plays = Math.floor(Math.random() * 3 + 1);

            /* Compare the User's Play with the Computer's, according to rules
             * Set Outcome and Tally Accordingly
             */
            switch (user_plays)
            {
                case 1:
                    switch (computer_plays)
                    {
                        case 1: ties++; outcome = "Tie"; break;
                        case 2: losses++; outcome = "Lose"; break;
                        case 3: wins++; outcome = "WIN"; break;
                    }
                break;
                case 2:
                    switch (computer_plays)
                    {
                        case 1: wins++; outcome = "WIN"; break;
                        case 2: ties++; outcome = "Tie"; break;
                        case 3: losses++; outcome = "Lose"; break;
                    }
                break;
                case 3:
                    switch (computer_plays)
                    {
                        case 1: losses++; outcome = "Lose"; break;
                        case 2: wins++; outcome = "WIN"; break;
                        case 3: ties++; outcome = "Tie"; break;
                    }
                break;
            }

            // Print Who Played What and Outcome
            document.querySelector("#user").innerHTML = "You played: <b>" + option_name(user_plays) + "</b>";
            document.querySelector("#computer").innerHTML = "Computer played: <b>" + option_name(computer_plays) + "</b>";
            document.querySelector("#outcome").innerHTML = "Outcome: <b>" + outcome + "</b>";

            // Print Score Tally
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            document.querySelector("#ties").innerHTML = "Ties: " + ties;

        });
    });

});


// A Function to Convert the Option ID (1-3) to the Corresponding String Name
function option_name(i)
{
    switch (i)
    {
        case 1: return "Rock"; break;
        case 2: return "Paper"; break;
        case 3: return "Scissors"; break;
    }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
