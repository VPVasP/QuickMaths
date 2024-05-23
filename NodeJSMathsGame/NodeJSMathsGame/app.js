const readline = require('readline');

var score = 0; //score variable
var lifes = 3; //lifes variable

//function to ask a question
function askQuestion() {
    //check if the player has no lifes left
    if (lifes <= 0) {
        console.log("You lost " + "Total Score " + score);
        process.exit(); //exit the program
    }

    //generate two random numbers
    var number1 = Math.floor(Math.random() * 3) + 5;
    var number2 = Math.floor(Math.random() * 3) + 5;
    //variables for addition, subsctraction and multiplication
    var resultAddition = number1 + number2;
    var resultSubtraction = number1 - number2;
    var resultMultiplication = number1 * number2;
    var resultsArray = [resultAddition, resultSubtraction, resultMultiplication];
    var randomIndex = Math.floor(Math.random() * resultsArray.length);
    var randomResult = resultsArray[randomIndex];

    //determite the question based on the index
    var question;
    if (randomIndex === 0) {
        question = "Addition: " + number1 + " + " + number2 + " = ? ";
    } else if (randomIndex === 1) {
        question = "Subtraction: " + number1 + " - " + number2 + " = ? ";
    } else if (randomIndex === 2) {
        question = "Multiplication: " + number1 + " * " + number2 + " = ? ";
    }

    //interface for reading input from the console
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // ask the question and get the user's response
    rl.question(question, (userInput) => {
        var answer = parseInt(userInput);
        //check if the answer is correct or wrong
        checkAnswer(answer, randomResult);
        rl.close();
    });
}

//function that checks the user's answer
function checkAnswer(answer, randomResult) {
    //if the answer matches the random result 
    if (answer === randomResult) {
        //print the correct answer message
        console.log("Correct!");
        //add +5 to the score
        score += 5;
        //print the score
        console.log("Score " + score);
    } else {
        //print the wrong answer message
        console.log("Incorrect!");
        //remove -1 life
        lifes -= 1;
        //print the lifes
        console.log("Lifes Left "+lifes);
    }

    setTimeout(askQuestion, 0); 

}

//start the question
askQuestion();

//don't shut the program
process.stdin.resume();