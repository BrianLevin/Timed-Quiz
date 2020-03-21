// Made document.query selctors which targeted each of my div  classes in my html page  to utilize in javascript
var startQuizButton = document.querySelector(".start");
var questionOne = document.querySelector('.question 1');
var questionTwo = document.querySelector('.question2');
var questionThree = document.querySelector('.question3');
var questionFour = document.querySelector('.question4');
var questionFive = document.querySelector('.question5');
var finishedForm = document.querySelector('.finished form intials');
var highScore = document.querySelector('.highscores');
var countDown = document.querySelector('#countdown');

var secondsLeft = 60;  // the seconds in the start of the countdown to complete the quiz.
// added a event listener which allows the user to click the button to start the quiz.
startQuizButton.addEventListener("click", function (event) {
    event.preventDefault(); // added the event.prevent default  so the page will not refresh until the quiz is completed.

    if (event.target.matches('button')) { // added a function within the if statement to start the time interval.
        var timeInterval = setInterval(function () {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
            if (timeLeft === 0) {
                countDown.textContent = ""; //  wanted to create an if statement once the countdown hits zero.

                clearInterval(timeInterval);
            }

        }, 10000);

    }

}

    }
