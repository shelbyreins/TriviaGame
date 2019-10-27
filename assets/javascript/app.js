$(document).ready(function () {

    var myQuestions = [
        {
            question: "What is the capital of California?",
            options: [
                "San Francisco",
                "Sacramento",
                "Monterey",
            ],
            answer: 1,
        },

        {
            question: "What is California's state flower?",
            options: [
                "Golden Poppy",
                "Camellia",
                "Orange-blossom",
            ],
            answer: 0,
        },

        {
            question: "California was admitted as the 31st state in what year?",
            options: [
                "1925",
                "1850",
                "1805",
            ],
            answer: 1,
        },

        {
            question: "What is California's state bird?",
            options: [
                "Bald Eagle",
                "Quail",
                "Seagull",
            ],
            answer: 1,
        },

        {
            question: "Which state boarders California to the north?",
            options: [
                "Montana",
                "Washington",
                "Oregon",
            ],
            answer: 2,
        },

        {
            question: "What coast is California on?",
            options: [
                "North",
                "South",
                "West",
            ],
            answer: 2,
        },

        {
            question: "What is California's state nickname?",
            options: [
                "The Golden state",
                "The Hoosier state",
                "The Bay state",
            ],
            answer: 0,
        },

        {
            question: "How many miles long is the state of California?",
            options: [
                "1000 miles",
                "770 miles",
                "890 miles",
            ],
            answer: 1,
        },

        {
            question: "Which is the highest point of elevation in California?",
            options: [
                "Mount Shasta",
                "Mount Diablo",
                "Mount Whitney",
            ],
            answer: 2,
        },

        {
            question: "Who is the governor of California (2019)?",
            options: [
                "Gavin Newsom",
                "Chris Pratt",
                "Arnold Schwarzenegger",
            ],
            answer: 0,
        },

    ];


    //Global Variables
    var timer = 60;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var test;

    $("#correctAnswers").hide();
    $("#incorrectAnswers").hide();
    $("#unanswered").hide();
    $("#display").hide();

    //Add click to the start button
    $("#startBtn").on("click", function () {
        $(this).hide();
        countDown();
        $("#timeLeft").html("Time Remaining: " + 60);
        startGame();
    })

    $("#submitBtn").on("click", function(){
        scoreBoard();

    })
    //Display question
    function startGame() {
        var holder = "";
        var output = [];

 
        for (var i = 0; i < myQuestions.length; i++) {
            holder += '<div class="questions" id="q" + i >' + myQuestions[i].question + "<br>";
            output = myQuestions[i].options;
   
            for (var k = 0; k < output.length; k++) {

                holder += '<input type="radio" class="i' + i + '" name = "' + i + '" value="' + k +'">' + output[k] +'</input>'
                
            }
            holder += '</div>';           
            $(".question").html(holder);

        }
        holder = '<button class="submit">Submit</button>'
        $("#submitBtn").html(holder);
        $("#correctAnswers").hide();
        $("#incorrectAnswers").hide();
        $("#unanswered").hide();
        $("#display").hide();
    }

    //Displays the answers 
    function scoreBoard(){
        var checkAnswer;
        correct = 0;
        incorrect = 0;
        unanswered = 0;

        for (var j = 0; j < myQuestions.length; j++){
        checkAnswer = $('.i' + j + ':checked');

        if (checkAnswer.val() == myQuestions[j].answer){
            correct++;
        } else if (checkAnswer.val() === undefined){
            unanswered++;
        } else {
            incorrect++;
        }
    }
    $("#correctAnswers").html ("Correct Answers: " + correct);
    $("#incorrectAnswers").html ("Incorrect Answers: " + incorrect);
    $("#unanswered").html ("Unanswered: " + unanswered);
    $("#correctAnswers").show();
    $("#incorrectAnswers").show();
    $("#unanswered").show();
    $("#display").show();
    $("#submitBtn").hide();
    $(".question").hide();
    $(".options").hide();
    $("#timeLeft").hide(); stop();
    
}

    //Timer
    function countDown() {
        clearInterval(test);
        test = setInterval(countDownTimer, 1000);
    }

    function countDownTimer() {
        timer--;
        $("#timeLeft").html("Time Remaining: " + timer);
        if (timer === 0) {
            stop();
            scoreBoard();
        }
    }

    function stop() {
        clearInterval(test);
    }
});





