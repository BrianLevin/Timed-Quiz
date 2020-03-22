// Made document.query selctors which targeted each of my div  classes in my html page  to utilize in javascript
var startQuizButton = document.querySelector(".start");
var questionOne = document.querySelector('.question-1');
var questionTwo = document.querySelector('.question-2');
var questionThree = document.querySelector('.question-3');
var questionFour = document.querySelector('.question-4');
var questionFive = document.querySelector('.question-5');
var finishedForm = document.querySelector('.finished-form-intials');
var highScore = document.querySelector('.highscores');
var countDown = document.querySelector('#countdown');


var secondsLeft = 60; // seconds for the timed quiz

var answerKey = ["Blue", "1776", "Mike Tyson", "Neptune", "-70.6"];
// the seconds in the start of the countdown to complete the quiz.
// added a event listener which allows the user to click the button to start the quiz.
startQuizButton.addEventListener("click", function (event) {
    event.preventDefault(); // added the event.prevent default  so the page will not refresh until the quiz is completed.

    $('#question-1').show(); // used a tutor who reconmended using j query for my assignment. used this j query method to show question one. 
    $("#btn1-q1").on("click", function (event) { // created this j query on click method  for what happens when you click  the button.
        var answer = $('#btn1-q1').attr('answer'); // made this button  for when I click first button within question one. then it will show the correct answer.
        console.log(answer);
        if (answer === answerKey[0]) { // if the attribute is correct, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn2-q1").on("click", function (event) {  //  this is the second button for question 2.
        var answer = $('#btn2-q1').attr('answer'); //  this varible is looking for within the jquery if the button choices mathes the attribute to correct or incorrect
        console.log(answer);
        if (answer === answerKey[0]) { // if the attribute is correct, then the answer will append correct on the screen.
            $('.eval').append('correct');

        }
        else {  // if the attribute is incorrect, the  the test will append incorrect on the screen.
            $('.eval').append('wrong');
        }
    })


    if (event.target.matches('button')) { // added a function within the if statement to start the time interval.
        var timeInterval = setInterval(function () {
            countDown.textContent = timeLeft + " seconds remaining";
            timeLeft--;
            if (timeLeft === 0) {
                countDown.textContent = ""; //  wanted to create an if statement once the countdown hits zero.

                clearInterval(timeInterval);
            }

        }, 60000);

    }
})




