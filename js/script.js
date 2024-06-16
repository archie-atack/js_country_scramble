/*
fix congo
cabo verde
*/

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint"),
timeText = document.querySelector(".time b"),
answerText = document.querySelector(".answer"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
hintBtn = document.querySelector(".show-hint");

let correctWord, timer, correctWordOutput;

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

    // Run if at least one country in array
    if (words.length > 0) {

        initTimer(20);

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
    answerText.style.display = "block";

    // Error if no word entered
    if(!userWord) {
       return answerText.innerText = "Enter an answer";
    };

    // Output if word is incorrect
    if(userWord !== correctWord) {
        return answerText.innerText = `Ooops, ${userWord} is not the correct word`;
    }

    // Output if word is correct
    answerText.innerText = `Yes, ${correctWordOutput} is the correct word`;

    // Reset timer and move on to next round
    clearInterval(timer);

    // Choose next word
    nextWord();
}

// Checks if input matches required word
inputField.addEventListener("input",checkWord)

// Move to next word if time out or skip required
refreshBtn.addEventListener("click", initGame);

// Show hint if hint button selected
hintBtn.addEventListener("click", () => {
    hintText.style.display = "block";
});

initGame();




