/* To do list:
Final score message?
*/

// set-up and game screens
const difficultyScreen = document.querySelector('.difficulty-screen'),
game = document.querySelector('.game'),
// update text on screen
wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint"),
timeText = document.querySelector(".time b"),
answerText = document.querySelector(".answer"),
hintCounterText = document.querySelector(".hint-counter"),
correctCounterText = document.querySelector(".correct-counter"),
countryCounterText = document.querySelector(".country-counter"), 
// capture input
inputField = document.querySelector("input"),
// define buttons
difficultyButtons = document.querySelectorAll('.difficulty-button'),
refreshBtn = document.querySelector(".refresh-word"),
revealBtn = document.querySelector(".reveal-word")
hintBtn = document.querySelector(".show-hint");

let correctWord, timer, correctWordOutput, filteredCountries = words,
hintCounter = 0, countryCounter = 0, correctCounter = 0, hintUsed, timeExpired
, difficultyLevel, numberCountries, scoreRatio;

// Define time logic
const initTimer = maxTime => {

    // Reset timer
    clearInterval(timer);

    // Set text output to time allowed
    timeText.innerText = maxTime

    // Define timer behavior
    timer = setInterval(() => {

        // Reduce time by one tick 
        if (maxTime > 0) {
            maxTime--;
            timeText.innerText = maxTime;
        } else {
            // When time is up, display the answer time out text and set time expired
            timeExpired = true;
            answerText.style.display = "block";
            answerText.innerText = `Time is up! ${correctWordOutput} is the answer. Select Skip Word for next country.`;

            // Stop the timer
            clearInterval(timer);
        }
    }, 1000); // reduce by one second per tick
}

// Define game logic for each word
const nextWord = () => {

    inputField.value = '';
    hintText.style.display = "none";
    answerText.style.display = "none";
    hintUsed = false;
    timeExpired = false;

    // Reset timer
    clearInterval(timer);

    // Run if at least one country in array
    if (filteredCountries.length > 0) {
        
        // Set timer
        initTimer(20);

        // Add count to overall
        countryCounter += 1;
        countryCounterText.innerText = `Country #${countryCounter}`;

        // Pick random country and remove from array
        let randomObjIndex = Math.floor(Math.random() * filteredCountries.length);
        let randomObj = filteredCountries[randomObjIndex];
        filteredCountries.splice(randomObjIndex, 1);

        // Shuffle word
        let wordArray = randomObj.word.split("");
        for (let i = wordArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }

        // Remove any non A-Z characters
        let filteredArray = wordArray.filter(item => item.trim() !== '');

        // Update text output
        wordText.innerText = filteredArray.join("");
        hintText.innerText = randomObj.hint;

        // Define correct word to compare against
        correctWord = randomObj.word.toLocaleLowerCase().replace(/\s/ig, '');
        correctWordOutput = randomObj.word;

    } else {
        // Handle end of game scenario

        scoreRatio = correctCounter / numberCountries

        if (scoreRatio < 0.25) {
            wordText.innerText = "Game over! Did you even try?";
        } else if (scoreRatio < 0.50) {
            wordText.innerText = "Game over! Not bad, seen better";
        } else if (scoreRatio < 0.75) {
            wordText.innerText = "Game over! Good effort";
        } else if (scoreRatio < 1) {
            wordText.innerText = "Game over! Great job";
        } else if (scoreRatio === 1) {
            wordText.innerText = "Game over! Geography royalty 👑";
        }
    }
}

const checkWord = () => {

    // Derive user input and show answer text
    let userWord = inputField.value.toLocaleLowerCase().replace(/\s/ig, '');
    
    // Update counter and go to new word if correct and time has not expired
    if(userWord == correctWord && timeExpired == false) {

        // Output if word is correct
        correctCounter += 1;
        correctCounterText.innerText = `Correct: ${correctCounter}/${numberCountries}`;
        answerText.innerText = `Yes, ${correctWordOutput} is the correct word`;

        // Reset timer and move on to next round
        clearInterval(timer);

        // Choose next word
        nextWord();
    }
}

// Checks if input matches required word
inputField.addEventListener("input",checkWord)

// Move to next word if time out or skip required
refreshBtn.addEventListener("click", nextWord);

// Reveal word if user does not know + ends round
revealBtn.addEventListener("click", () => {
    
    // Show answer and set time expired so cant be correct
    timeExpired = true;
    answerText.style.display = "block";
    answerText.innerText = `${correctWordOutput} is the answer. Select Skip Word for next country.`;

    // Stop the timer
    clearInterval(timer);
});

// Show hint if hint button selected
hintBtn.addEventListener("click", () => {
    
    // Only run if hint has not been activated
    if(!hintUsed){
        hintCounter += 1;
        hintCounterText.innerText = `Hints: ${hintCounter}`;
        hintText.style.display = "block";
        hintUsed = true;
    }
});

// Define game start function
const startGame = () => {
    // Hide the difficulty screen and show the game screen
    difficultyScreen.style.display = 'none';
    game.style.display = 'block';

    // Set score
    correctCounterText.innerText = `Correct: ${correctCounter}/${numberCountries}`;

    // Set up initial conditions and start the first word
    nextWord();
}

// Derive difficulty and start game
difficultyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const difficulty = event.target.dataset.difficulty;
        
        // Set difficulty level in the game (this could involve setting some global variable)
        if(difficulty == "All") {
            numberCountries = words.length;
        } else {
            filteredCountries = words.filter(country => country.continent === difficulty);
            numberCountries = filteredCountries.length;
        }

        startGame();
    });
});






