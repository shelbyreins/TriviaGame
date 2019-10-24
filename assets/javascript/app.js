$(document).ready(function(){
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
    questions: "Which is the highest point of elevation in California?",
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
    options: {
    a: "Gavin Newsom",
    b: "Chris Pratt",
    c: "Arnold Schwarzenegger", 
    d: "Sylvester Stallone"
    },
    answer: "a",
},

];


//Global Variables
var start;
var time;
var userGuess;
var timer = 20;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var rightAnswer;


// Add in images/gifs in an array 
//to make them easy to call on
var images = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10"];
//Add in messages for the following "Correct" or "Incorrect" or "Ran out of time"
//Possibly take out and make then conditionals??
var messages = {
    correct: "Yes, you got it right!",
    incorrect: "No, that's not correct.",
    outOfTime: "You ran out of time for this question!"
}
//Users click on start button to start the game
    $("#startBtn").on ("click", function(){
//somehow hide the start button from following pages
        $(this).hide;
        //add a function new game to start the game
        //add the timer to start the timer
    })
//Use jQuery to restart the game
    $("#startOver").on ("click", function(){
        $(this).hide
        nextQuestion();
        //add a function for new game to start a new game
        //add the timer to start the timer here
    })
// function for user to click on an answer
// Add in conditionals? to represent if the user gets the answer right or wrong
    $("#options").on("click", function(){

    })


//Start game
// I will need a function
//Nothing on the page except the start button
//Set everyhting to zero or .hide, .remove, .empty??
//On click button for the start
//How will I make it immedatly go to the next page?
    //add another function for the questions and add to startGame
    function startGame(){
        // correctAnswer = 0;
        // incorrectAnswer = 0;
        // unanswered = 0;

         
    }
    startGame();

   var thisQuestion;

    function nextQuestion(){
        $(".question").html(myQuestions[thisQuestion].question);
        for (var i = 0; i < 3; i++){
            $("#options").html(myQestions.answer[i]);

        }
    }

//Which function takes us to the next page? 
//function for timer
    function countDown(){
        seconds = 20;
        $("#timeLeft").html("00:" + seconds)
        time = setInterval(countDownTimer, 1000)
        
    }

// function to show timer
// possibly add in additional conditionals
// to iterate if the player/user get the correct answer or not

    function countDownTimer() {
        seconds --;
        if (seconds < 1){
            clearInterval(time);
        }
    }

//














});  
