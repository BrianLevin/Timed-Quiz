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


var secondsLeft = 15; // seconds for the timed quiz

var answerKey = ["Blue", "1776", "Mike Tyson", "Neptune", "-70.6°F "]; // Added the answer key array so when the  user guesses the correct answer, it will pull up  the answer from this array

// added a event listener which allows the user to click the button to start the quiz.
startQuizButton.addEventListener("click", function (event) {
    //event.preventDefault(); // added the event.prevent default  so the page will not refresh until the quiz is completed.

    //$('#question-1').show();  
    // used event listeners to target the button clicks                            // used a tutor who reconmended using j query for my assignment. used this j query method to show question one when the user clicks start quiz
    btn1Q1.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn1Q1").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[0]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3; //subtracted 3 seconds each time the user got the wrong answer
        }
    })


    btn2Q1.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn2Q1").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[0]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3; //subtracted 3 seconds each time the user got the wrong answer
        }
    })

    btn3Q1.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn3Q1").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[0]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })

    btn4Q1.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn4Q1").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[0]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })

    btn1Q2.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn1Q2").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }

    })

    btn2Q2.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn2Q2").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';

            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn3Q2.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn3Q2").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn4Q2.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn4Q2").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn1Q3.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn1Q3").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn2Q3.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn2Q3").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn3Q3.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn3Q3").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn4Q3.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn4Q3").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
            secondsLeft = --3;
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn1Q4.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn1Q4").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn2Q4.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn2Q4").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn3Q4.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn3Q4").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
            secondsLeft = --3;
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn4Q4.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn4Q4").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn1Q5.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn1Q5").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn2Q5.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn2Q5").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })

    btn3Q5.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn3Q5").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct"; // this will evaluate and show the answer as "correct" on the html page 
        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';

            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;
        }
    })
    btn4Q5.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn4Q5").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
        console.log(answer);
        if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');
            //document.getElementsByClassName("eval").innerHTML("correct"); 
            //eval.empty(); 
            eval.innerHTML = ' ';
            eval.innerHTML = "correct";// this will evaluate and show the answer as "correct" on the html page 

        }
        else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //document.getElementsByClassName("eval").innerHTML("wrong");      //$('.eval').append('wrong');
            eval.innerHTML = ' ';
            eval.innerHTML = "wrong"; // this will evaluate and show the answer as "incorrect" on the html page
            secondsLeft = --3;

        }
        // added a time interval count down to my quiz
        var timeInterval = setInterval(function () {
            countDown.textContent = secondsLeft + " seconds remaining";
            secondsLeft--;


            if (secondsLeft === 0) {
                countDown.textContent = "";
                speedRead();
                clearInterval(timeInterval);
            }

        }, 15000);
    })
})
var timeSubtraction = setInterval(function () {

})
finishedForm.textContent = form;

finishedForm.addEventListener("click", function (event) { // added local storage for the user to put their intitials
    var form = document.querySelector('.finished-form-intials').value // this will input the user intials value on the page.
    if (form = " ") {
        displayMessage('error, intials can"t be blank');
    } else if (form = '0123456789') {
        displaymessage('error, intials can not have numbers in them');
    } else {
        displayMessage('success! your intials have been stored');


        localStorage.setItem("finished-form-intials", form); // this will store the users intials
        var points = [2, 2, 2, 2, 2]  // each question is worth 2 points.


        highScore.addEventListener("click", function (event) { // These if statements will determine the users score which will be stored with their intials
            if (answerKey === points[arr]) {
                displayMessage("10 points!")
            } else if (answerKey === points[0, 1, 2, 3]) {
                displayMessage('8 points!')
            }
            else if (answerKey === points[0, 1, 2]) {
                displayMessage('6 points!')
            }
            else if (answerKey === points[0, 1]) {
                displayMessage('4 points!')
            }
            else if (answerKey === points[0]) {
                displayMessage('2 points!')
            }
            else (answerKey === points[] {
                displayMessage('0 points!')
            }
            localStorage.setItem("Highscores", JSON.stringify());



// wasted jquery i did

            //$("#btn1-q1").on("click", function (event) { // this is the first button for question 1.
    //var answer = $('#btn1-q1').attr('answer');//  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
    //console.log(answer);
    //if (answer === answerKey[0]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
    //$//('.eval').append('correct');

    //}
    //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
    //$('.eval').append('wrong');
    //}
    //})
    //$("#btn2-q1").on("click", function (event) {  //  this is the second button for question 1.
    //var answer = $('#btn2-q1').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
    //console.log(answer);
    //if (answer === answerKey[0]) { // if the attribute is  === to the answerKey, then the answer will append correct on the screen.
    //$('.eval').append('correct');
    // var score= score +2;

    //}
    //else {  // if the attribute is incorrect and !=== to the index in the AanswerKey, the  the test will append incorrect on the screen.
    //$('.eval').append('wrong');
    // nterval = interval - 1000;
    //}
    //})
    //$("#btn3-q1").on("click", function (event) {  //  this is the third button for question 1.
        //var answer = $('#btn3-q1').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[0]) { // if the attribute is correct and === to the answerKey, then the answer will append correct on the screen.
            //$('.eval').append('correct');

        //}
        //else {  // if the attribute is incorrect and !=== to the answerKey, the  the test will append incorrect on the screen.
            //$('.eval').append('wrong');
        //}
    //})
    //$("#btn4-q1").on("click", function (event) {  //  this is the fourth button for question 1.
        //var answer = $('#btn4-q1').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[0]) { // if the attribute is correct and === to the answerKey, then the answer will append correct on the screen.
            //$('.eval').append('correct');

        //}
        //else {  // if the attribute is incorrect and not === the index in the answer key, the  the test will append incorrect on the screen.
            //$('.eval').append('wrong');
        //}
    //})

    //$('#question-2').show(); // question 2 will show after the first questioned is answered
    //$("#btn1-q2").on("click", function (event) { // this is the first button for question 2.
        //var answer = $('#btn1-q2').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //$('.eval').append('wrong');
        //}
    //})
    //$("#btn2-q2").on("click", function (event) { // this is the second button for question 2.
        //var answer = $('#btn2-q2').attr('answer');//  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //$('.eval').append('wrong');
        //}
    //})
    //$("#btn3-q2").on("click", function (event) { // this is the first button for question 2.
        //var answer = $('#btn3-q2').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //$('.eval').append('wrong');
        //}
    //})
    //$("#btn4-q2").on("click", function (event) { // this is the second button for question 2.
        //var answer = $('#btn4-q2').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[1]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //$('.eval').append('wrong');
        //}
    //})
    //$('#question-3').show(); // question 3 will show after the second questioned is answered
    //$("#btn1-q3").on("click", function (event) { // this is the first button for question 3.
        //var answer = $('#btn1-q3').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //$('.eval').append('wrong');
        //}
    //})
    //$("#btn2-q3").on("click", function (event) { // this is the second button for question 3.
        //var answer = $('#btn2-q3').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //$('.eval').append('wrong');
        //}
    //})
    //$("#btn3-q3").on("click", function (event) { // this is the third button for question 3.
       // var answer = $('#btn3-q3').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //$('.eval').append('wrong');
        //}
    //})

    //$("#btn4-q3").on("click", function (event) { // this is the fourth button for question 3.
       // var answer = $('#btn4-q3').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[2]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
           // $('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //$('.eval').append('wrong');
        //}
    //})

    //$('#question-4').show(); // question 4 will show after the third questioned is answered
    //$("#btn1-q4").on("click", function (event) { // this is the first button for question 4.
       // var answer = $('#btn1-q4').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //$('.eval').append('wrong');
        //}
    //})

    //$("#btn2-q4").on("click", function (event) { // this is the second button for question 4.
        //var answer = $('#btn2-q4').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
            //$('.eval').append('wrong');
        //}
    //})
    //$("#btn3-q4").on("click", function (event) { // this is the third button for question 4.
        //var answer = $('#btn3-q4').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
            //$('.eval').append('correct');

        //}
       // else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
          //  $('.eval').append('wrong');
        //}
    //})
   // $("#btn4-q4").on("click", function (event) { // this is the fourth button for question 4.
       // var answer = $('#btn4-q4').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[3]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
          //  $('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
           // $('.eval').append('wrong');
        //}
    //})
    //$('#question-5').show(); // question 5 will show after the fourthquestioned is answered
    //$("#btn1-q5").on("click", function (event) { // this is the first button for question 5.
      //  var answer = $('#btn1-q5').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
          //  $('.eval').append('correct');

       // }
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
          //  $('.eval').append('wrong');
        //}
    //})
    //$("#btn2-q5").on("click", function (event) { // this is the second button for question 5.
      //  var answer = $('#btn2-q5').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        //if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
          //  $('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
          //  $('.eval').append('wrong');
        //}
    //})
   // $("#btn3-q5").on("click", function (event) { // this is the third button for question 5.
      //  var answer = $('#btn3-q5').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
       // console.log(answer);
        //if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
          //  $('.eval').append('correct');

        //}
        //else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
          //  $('.eval').append('wrong');
       // }
    //})
    //$("#btn4-q5").on("click", function (event) { // this is the fourth button for question 5.
      //  var answer = $('#btn4-q5').attr('answer'); //  made the var answer to hold the correct value if the button id and the attribute match the correct user choice
        //console.log(answer);
        // if (answer === answerKey[4]) { // if the attribute is === to the  answerKey index number, then that will be the  correct answer and apend on the page
           // $('.eval').append('correct');

      //  }
       // else { // if the tribute is incorrect and !=== to the answer in the answerKey, then the question will show incoreect and append incorrect on the page.
         //   $('.eval').append('wrong');
        //}
    // })

    // if (event.target.matches('button')) { // added a function within the if statement to start the time interval.
       // var timeInterval = setInterval(function () {
         //   countDown.textContent = timeLeft + " seconds remaining";
           // timeLeft--;
           // if (timeLeft === 0) {
             //   countDown.textContent = ""; //  wanted to create an if statement once the countdown hits zero.

               // clearInterval(timeInterval);
           // }

       // }, 60000);

   // }
