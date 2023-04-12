window.onload = function () {

    const guessBar = document.querySelector(".guessBar");

    guessBar.addEventListener("focus", function () {
        guessBar.placeholder = "Guess a number";
    });

    guessBar.addEventListener("blur", function () {
        guessBar.placeholder = "Enter your guess";
    });

    const guessButton = document.querySelector(".guess")
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    guessButton.addEventListener('click', function () {

        const guessBar = document.querySelector(".guessBar")
        const guess = Number(guessBar.value)
        if (guess === randomNumber) {
            alert("You guessed it!")
        }

        else if (guess < randomNumber) {
            alert("Too low!")
        }

        else {
            alert("Too high!")
        }
    })

    const startButton = document.querySelector(".playGame")
    startButton.addEventListener('click', function () {
        alert("Game Started!!!   Guess a number");
    })

    const endButton = document.querySelector(".exitGame")
    endButton.addEventListener('click', function () {
        alert("Game over!!!");
    })

}



