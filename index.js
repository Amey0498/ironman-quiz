var readlineSync = require("readline-sync");

function log(data){
  console.log(data);
}

var correctAnswer = "You are correct!!";
var wrongAnswer = "You are Wrong!!";
var questions = [
    {
    question: "Who is Iron Man? ",
    options:["Peter Parker","Bruce Wayne", "Steve Rogers", "Anthony Stark"],
    answer: "Anthony Stark"
  },
    {
    question: "Who plays Iron Man? ",
    options:["Sebastian Stan","Robert Downey Jr.", "Jon Favreau", "Chris Hemsworth"],
    answer: "Robert Downey Jr."
  },
  {
    question:"What is Ironman's favourite food? ",
    options:["Cheeseburger","Hamburger", "Vada Pav", "Steak"],
    answer: "Cheeseburger"
  },
  {
    question: "What was his last dialogue in his first movie? ",
    options:["I am inevitable","Destiny has arrived", "I am Iron Man", "Part of the journey is the end"],
    answer: "I am Iron Man"
  },
  {
    question: "What is his daughter's name? ",
    options:["Pepper Stark","Catelyn Stark", "Morgan Stark", "Arya Stark"],
    answer: "Morgan Stark"
  }
];

function play({question, answer, options}){
  var userAnswer = "";
  if(options == null){
    userAnswer = readlineSync.question(question);
  } else if (options != null){
    index = readlineSync.keyInSelect(options, question, {cancel:"Skip to next question"});
    userAnswer = options[index];
  }

  if(userAnswer === answer){
    userScore++;
    log(correctAnswer);
  } else if (userAnswer === undefined){
    log("Skipping to next question")
    }
    else {
    log(wrongAnswer);
  }
  log("Your current score : "+userScore);
}


var welcomeQuestion = "What is your name? "
var userName = readlineSync.question(welcomeQuestion);

var welcomeMessage = 'Welcome '+userName+ ' to "Are you the Ultimate Iron Man Fan?"';
var userScore = 0;
log(welcomeMessage);

for (var i=0; i <questions.length; i++){
  play(questions[i]);
}