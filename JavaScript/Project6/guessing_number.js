let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const user_input = document.querySelector('#number');

const previous_guesses_slot = document.querySelector('.previous_guesses');
const remaining_guesses_slot = document.querySelector('.remaining_guesses');

const lowOrHi = document.querySelector('.lowOrHi');

// const p = document.createElement('p');

let prev_guess = [];
let guess_count = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(user_input.value);
        console.log(guess)
        validate_guess_number(guess);
    });
}

function validate_guess_number(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number!!!')
    }
    else if (guess < 1) {
        alert('Please Enter a Number more than 1!!!')
    }
    else if (guess > 100) {
        alert('Please Enter a Number less than 100!!!')
    }
    else {
        prev_guess.push(guess);
        if (guess_count === 11) {
            displayGuess(guess);
            displayMessage(`Game is Over.Random Number was ${randomnumber}`);
            
            const myTimeout = setTimeout(endGame, 1000);
            function endGame() {
                window.location.reload();
            }
            
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomnumber) {
        displayMessage("You Guessed a right number!!!")
        const myTimeout = setTimeout(endGame, 1000);

        function endGame() {
            window.location.reload();
        }
    } else if (guess > randomnumber) {
        displayMessage("Number is Too High!!!")
    }
    else {
        displayMessage("Number is Too Low!!!")
    }
}

function displayGuess(guess) {
    user_input.value = '';
    previous_guesses_slot.innerHTML += `${guess}, `;
    guess_count++;
    remaining_guesses_slot.innerHTML = `${11 - guess_count}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


