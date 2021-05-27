var readlineSync = require("readline-sync");
const chalk = require("chalk");

function log(data){
  console.log(data);
}

var correctAnswer = "You are correct!!";
var wrongAnswer = "You are Wrong!!";
var questions = [
    {
    question: "Who is Iron Man?\n",
    options:["Peter Parker","Bruce Wayne", "Steve Rogers", "Anthony Stark"],
    answer: "Anthony Stark"
  },
    {
    question: "Who plays Iron Man?\n",
    options:["Sebastian Stan","Robert Downey Jr.", "Jon Favreau", "Chris Hemsworth"],
    answer: "Robert Downey Jr."
  },
  {
    question:"What is Ironman's favourite food?\n",
    options:["Cheeseburger","Hamburger", "Vada Pav", "Steak"],
    answer: "Cheeseburger"
  },
  {
    question: "What was his last dialogue in his first movie?\n",
    options:["I am inevitable","Destiny has arrived", "I am Iron Man", "Part of the journey is the end"],
    answer: "I am Iron Man"
  },
  {
    question: "What is his daughter's name?\n",
    options:["Pepper Stark","Catelyn Stark", "Morgan Stark", "Arya Stark"],
    answer: "Morgan Stark"
  },
  {
    question: "What nickname did he give to Thor?\n",
    options:["Underoos","Point Break", "Strongest Avenger", "Puny God"],
    answer: "Point Break"
  },
  {
    question: "Whom does consider as his mentee?\n",
    options:["Peter Parker", "Bruce Banner", "Steve Rogers", "Buck Barnes"],
    answer: "Peter Parker"
  },
  {
    question: "What is his only curse?\n",
    options:["Knowledge", "Violence", "Thanos", "Mandarin"],
    answer: "Thanos"
  },
  {
    question: "Where does he live?\n",
    options:["Bornheim, Frankfurt", "Toronto Islands, Toronto", "Brooklyn, New York", "Malibu, California"],
    answer: "Malibu, California"
  },
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
    log(chalk.bgWhiteBright.greenBright.bold(correctAnswer));
  } else if (userAnswer === undefined){
    log(chalk.bgWhiteBright.cyanBright.bold.italic("Skipping to next question"));
    }
    else {
    log(chalk.bgWhiteBright.redBright.bold(wrongAnswer));
  }
  log(chalk.bgWhiteBright.cyanBright.bold("Your current score : " + userScore));
  log(chalk.bgWhiteBright.redBright.bold("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+"));
}


var welcomeQuestion = "What is your name?\n"
var userName = readlineSync.question(chalk.bgWhiteBright.cyanBright.bold(welcomeQuestion));

var welcomeMessage = 'Welcome '+userName+ ' to "Are you the Ultimate Iron Man Fan?"';
var userScore = 0;
log(chalk.bgWhiteBright.redBright.bold(welcomeMessage));

for (var i=0; i <questions.length; i++){
  play(questions[i]);
}

log(chalk.bgWhiteBright.blue.bold("YAY! You scored " + userScore + " points!"));