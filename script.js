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

var answerKey = ["Blue", "1776", "Mike Tyson", "Neptune", "-70.6"]; // Added the answer key array so when the  user guesses the correct answer, it will pull up  the answer from this array

// added a event listener which allows the user to click the button to start the quiz.
startQuizButton.addEventListener("click", function (event) {
    event.preventDefault(); // added the event.prevent default  so the page will not refresh until the quiz is completed.

    $('#question-1').show(); // used a tutor who reconmended using j query for my assignment. used this j query method to show question one when the user clicks start quiz
    $("#btn1-q1").on("click", function (event) { // this is the first button for question 1.
        var answer = $('#btn1-q1').attr('answer');//  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[0]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn2-q1").on("click", function (event) {  //  this is the second button for question 1.
        var answer = $('#btn2-q1').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[0]) { // if the attribute is  === to the answerKey, then the answer will append correct on the screen.
            $('.eval').append('correct');

        }
        else {  // if the attribute is incorrect and !=== to the index in the AanswerKey, the  the test will append incorrect on the screen.
            $('.eval').append('wrong');
        }
    })
    $("#btn3-q1").on("click", function (event) {  //  this is the third button for question 1.
        var answer = $('#btn3-q1').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[0]) { // if the attribute is correct and === to the answerKey, then the answer will append correct on the screen.
            $('.eval').append('correct');

        }
        else {  // if the attribute is incorrect and !=== to the answerKey, the  the test will append incorrect on the screen.
            $('.eval').append('wrong');
        }
    })
    $("#btn4-q1").on("click", function (event) {  //  this is the fourth button for question 1.
        var answer = $('#btn4-q1').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[0]) { // if the attribute is correct and === to the answerKey, then the answer will append correct on the screen.
            $('.eval').append('correct');

        }
        else {  // if the attribute is incorrect and not === the index in the answer key, the  the test will append incorrect on the screen.
            $('.eval').append('wrong');
        }
    })

    $('#question-2').show(); // question 2 will show after the first questioned is answered
    $("#btn1-q2").on("click", function (event) { // this is the first button for question 2.
        var answer = $('#btn1-q2').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn2-q2").on("click", function (event) { // this is the second button for question 2.
        var answer = $('#btn2-q2').attr('answer');//  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn3-q2").on("click", function (event) { // this is the first button for question 2.
        var answer = $('#btn3-q2').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn4-q2").on("click", function (event) { // this is the second button for question 2.
        var answer = $('#btn4-q2').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $('#question-3').show(); // question 3 will show after the second questioned is answered
    $("#btn1-q3").on("click", function (event) { // this is the first button for question 3.
        var answer = $('#btn1-q3').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn2-q3").on("click", function (event) { // this is the second button for question 3.
        var answer = $('#btn2-q3').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn3-q3").on("click", function (event) { // this is the third button for question 3.
        var answer = $('#btn3-q3').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })

    $("#btn4-q3").on("click", function (event) { // this is the fourth button for question 3.
        var answer = $('#btn4-q3').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })

    $('#question-4').show(); // question 4 will show after the third questioned is answered
    $("#btn1-q4").on("click", function (event) { // this is the first button for question 4.
        var answer = $('#btn1-q4').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })

    $("#btn2-q4").on("click", function (event) { // this is the second button for question 4.
        var answer = $('#btn2-q4').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn3-q4").on("click", function (event) { // this is the third button for question 4.
        var answer = $('#btn3-q4').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn4-q4").on("click", function (event) { // this is the fourth button for question 4.
        var answer = $('#btn4-q4').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $('#question-5').show(); // question 5 will show after the fourthquestioned is answered
    $("#btn1-q5").on("click", function (event) { // this is the first button for question 5.
        var answer = $('#btn1-q5').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn2-q5").on("click", function (event) { // this is the second button for question 5.
        var answer = $('#btn2-q5').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn3-q5").on("click", function (event) { // this is the third button for question 5.
        var answer = $('#btn3-q5').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            $('.eval').append('wrong');
        }
    })
    $("#btn4-q5").on("click", function (event) { // this is the fourth button for question 5.
        var answer = $('#btn4-q5').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        console.log(answer);
        if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            $('.eval').append('correct');

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
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




