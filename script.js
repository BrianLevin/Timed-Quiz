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
        }
    })

    btn1Q2.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn1Q2").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })

    btn2Q2.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn2Q2").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn3Q2.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn3Q2").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn4Q2.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn4Q2").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn1Q3.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn1Q3").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn2Q3.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn2Q3").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn3Q3.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn3Q3").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn4Q3.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn4Q3").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn1Q4.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn1Q4").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn2Q4.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn2Q4").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn3Q4.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn3Q4").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn4Q4.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn4Q4").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn1Q5.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn1Q5").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn2Q5.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn2Q5").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })

    btn3Q5.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn3Q5").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
        }
    })
    btn4Q5.addEventListener('click', function (event) { // changed the btn1-q1 to btnn1Q1 so my page could format it correctly after saving

        var answer = document.getElementById("btn4Q5").getAttribute("answer"); // added the var answer to get the id and attribute from the html page and see if the value matches the var Answer Key.
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
finishedForm.addEventListener("click", function (event) {
    localStorage.setItem("finished-form-intials")
})
highScore.addEventListener("click")