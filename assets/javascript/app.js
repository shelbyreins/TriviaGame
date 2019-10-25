$(document).ready(function () {

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
            answer: 1,
        },

    ];


    //Global Variables
    var currentQuestion = 0;
    var userGuess;
    var timer = 20;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var rightAnswer;
    var test;
   


    //var images = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10"];

    $("#startBtn").on("click", function () {
        $(this).hide();
        startGame();
        countDown();
        $("#timeLeft").html("Time Remaining: " + 20);
    })
    
    $("#startOver").on("click", function () {
        $(this).hide();
        startGame();
        countDown();
    })
    // $(".options").on("click", function(){
       
    //     //$(this).hide;
        
    // })

    

    function startGame() {
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        nextQuestion();
    }

    

    function nextQuestion() {
        $(".question").html(myQuestions[currentQuestion].question);
        for (var i = 0; i < 3; i++){
            $(".options").append(myQuestions[currentQuestion].options[i]);
        }
        countDown();
        $(".options").on("click", function(){
        answerDisplay();
        stop();
        })
    

    function answerDisplay(){
        if(userGuess === myQuestions.answer){
            correct++;
            currentQuestion++;
            //Show image
            stop();
            //$("#message").html("Yes, that's not correct." + "The answer is: " + myQuestions.answer[currentQuestion]);
           
            
        }else if (userGuess !== myQuestions.answer){
            incorrect++;
            currentQuestion++;
            stop();
            //$("#message").html("No, that's not correct." + "The answer is: " + myQuestions.answer[currentQuestion]);

        }else {
            unanswered++;
            currentQuestion++;
            stop();
            //$("#message").html("You ran out of time for this question!" + "The answer is: " + myQuestions.answer[currentQuestion]);
        }
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
               //answerDisplay();
        }
    }

    function stop(){
        clearInterval(test);
    }
  
    function lastQuestion(){
        if (currentQuestion === myQuestion.length){
            ("#timeLeft").hide();
            scoreBoard();
            $("#startBtn").on("click", function () {
            $(this).hide();
            startGame();
            countDown();
            $("#timeLeft").html("Time Remaining: " + 20);
            })


        }
    }
    function scoreBoard(){
        $("#correctAnswers").html ("Correct Answers: " + correct);
        $("#incorrectAnswers").html ("Incorrect Answers: " + incorrect);
        $("#unanswered").html ("Unanswered: " + unanswered);

    }









});  
