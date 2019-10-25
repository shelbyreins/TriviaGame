$(document).ready(function () {
    //Trivia Game

    //Question page
    //10 multiple choice quesions 
    //Put Questions into an array 
    // to make the questions easy to iterate over

    var myQuestions = [
        {
            question: "What is the capital of Califonia?",
            options: [
                "San Francisco",
                "Sacramento",
                "Monterey",
                "San Diego",
            ],
            answer: 1,
        },

        {
            question: "What is California's state flower?",
            options: [
                "Golden Poppy",
                "Camellia",
                "Orange-blossom",
                "Forget-me-not",
            ],
            answer: 0,
        },

        {
            question: "California was admitted as the 31st state in what year?",
            options: [
                "1925",
                "1850",
                "1805",
                "1825"
            ],
            answer: 1,
        },

        {
            question: "What is Califonria's state bird?",
            options: [
                "Bald Eagle",
                "Finch",
                "Quail",
                "Seagull",
            ],
            answer: 2,
        },

        {
            question: "Which state boarders California to the north?",
            options: [
                "Oregon",
                "Montana",
                "Washington",
                "Nevada",
            ],
            answer: 0,
        },

        {
            question: "What coast is California on?",
            options: [
                "East",
                "North",
                "South",
                "West",
            ],
            answer: 3,
        },

        {
            question: "What is California's state nickname?",
            options: [
                "The Golden state",
                "The Sunshine state",
                "The Hoosier state",
                "The Bay state",
            ],
            answer: 0,
        },

        {
            question: "How many miles long is the state of California?",
            options: [
                "432 miles",
                "1000 miles",
                "770 miles",
                "890 miles",
            ],
            answer: 2,
        },

        {
            question: "Which is the highest point of elevation in California?",
            options: [
                "Mount Saint Helena",
                "Mount Shasta",
                "Mount Diablo",
                "Mount Whitney",
            ],
            answer: 3,
        },

        {
            question: "Who is the governor of Califonria (2019)?",
            options: [
                "Gavin Newsom",
                "Chris Pratt",
                "Arnold Schwarzenegger",
                "Sylvester Stallone"
            ],
            answer: "a",
        },

    ];


    //Global Variables
    var currentQuestion = 0;
    var time;
    var userGuess;
    var timer = 20;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var rightAnswer;
    var test;
    var currentQuestion= 0; 


    // Add in images/gifs in an array 
    //to make them easy to call on
    var images = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10"];

    // var messages = {
    //     correct: "Yes, you got it right!",
    //     incorrect: "No, that's not correct.",
    //     outOfTime: "You ran out of time for this question!"
    // }
    
    //Users click on start button to start the game
    $("#startBtn").on("click", function () {
        //somehow hide the start button from following pages
        $(this).hide();
        startGame();
        //add a function new game to start the game
        //add the timer to start the timer
        $("#timeLeft").html("Time Remaining: " + 20);
    })
    //Use jQuery to restart the game
    $("#startOver").on("click", function () {
        $(this).hide();
        startGame();
        //add a function for new game to start a new game
        //add the timer to start the timer here
    })
    // function for user to click on an answer
    // Add in conditionals? to represent if the user gets the answer right or wrong
   


    //Start game
    // I will need a function
    //Nothing on the page except the start button
    //Set everyhting to zero or .hide, .remove, .empty??
    //On click button for the start
    //How will I make it immedatly go to the next page?
    //add another function for the questions and add to startGame
    function startGame() {
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        nextQuestion();
    }

    $(".options").on("click", answerDisplay);

    function nextQuestion() {
        $(".question").html(myQuestions[currentQuestion].question);
        $(".options").append(myQuestions[currentQuestion].options);
        
    }

    function answerDisplay(){
        if(userGuess === myQuestions.answer){
            correct++;
            currentQuestion++;
            //Show image
            countDown();
            $("#message").html("Yes, you got it right!" + "The answer is: " + myQuestions.answer[currentQuestion]);
            
        }else if (userGuess !== myQuestions.answer){
            incorrect++;
            currentQuestion++;
            countDown();
            $("#message").html("No, that's not correct." + "The answer is: " + myQuestions.answer[currentQuestion]);

        }else {
            unanswered++;
            currentQuestion++;
            countDown();
            $("#message").html("You ran out of time for this question!" + "The answer is: " + myQuestions.answer[currentQuestion]);
        }
        //add in a function for when the game ends
    }



    function countDown() {
        clearInterval(test);
        test = setInterval(countDownTimer, 1000);
    }

    function countDownTimer() {
        timer--;
        $("#timeLeft").html("Time Remaining: " + timer);
            if (timer === 0) {
               stop();
        }
    }

    function stop(){
        clearInterval(test);
    }
   countDown();
    function scoreboard(){
        $("#correctAnswers").html ("Correct Answers: " + correct);
        $("#incorrectAnswers").html ("Incorrect Answers: " + incorrect);
        $("#unanswered").html ("Unanswered: " + unanswered);

    }









});  
