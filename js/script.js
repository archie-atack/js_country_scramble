/* To do list:
Add in hint and country counter; also correct counter
Test it all the way to the end
*/

// update text on screen
const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint"),
timeText = document.querySelector(".time b"),
answerText = document.querySelector(".answer"),
hintCounterText = document.querySelector(".hint-counter"),
correctCounterText = document.querySelector(".correct-counter"),
countryCounterText = document.querySelector(".country-counter"), 
// capture input
inputField = document.querySelector("input"),
// define buttons
refreshBtn = document.querySelector(".refresh-word"),
hintBtn = document.querySelector(".show-hint");

let correctWord, timer, correctWordOutput,
hintCounter = 0, countryCounter = 0, correctCounter = 0, hintUsed;

// Define time logic
const initTimer = maxTime => {

    // Reset timer
    clearInterval(timer);
    console.log(words.length);

    // Set text output to time allowed
    timeText.innerText = maxTime

    // Define timer behavior
    timer = setInterval(() => {

        // Reduce time by one tick 
        if (maxTime > 0) {
            maxTime--;
            timeText.innerText = maxTime;
        } else {
            // When time is up, display the answer time out text
            answerText.style.display = "block";
            answerText.innerText = `Ooops, ${correctWordOutput} is the answer`;

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

    // Run if at least one country in array
    if (words.length > 0) {

        // Set timer
        initTimer(20);

        // Add count to overall
        countryCounter += 1;
        countryCounterText.innerText = `Country #${countryCounter}`;

        // Pick random country and remove from array
        let randomObjIndex = Math.floor(Math.random() * words.length);
        let randomObj = words[randomObjIndex];
        words.splice(randomObjIndex, 1);

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
        wordText.innerText = "Game over! No more words.";
    }
}

const initGame = () => {
    nextWord();
}

const checkWord = () => {

    // Derive user input and show answer text
    let userWord = inputField.value.toLocaleLowerCase().replace(/\s/ig, '');
    
    // Update counter and go to new word if correct
    if(userWord == correctWord) {

        // Output if word is correct
        correctCounter += 1;
        correctCounterText.innerText = `Correct: ${correctCounter}/194`;
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
refreshBtn.addEventListener("click", initGame);

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

initGame();




