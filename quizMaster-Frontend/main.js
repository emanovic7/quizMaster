document.addEventListener("DOMContentLoaded", function(){
  const loginForm = document.getElementById("login-form")
})

//Global Variables:
const mainContainer = document.getElementById("main-container");

//shuffle returned data
function shuffleArray(array){
  for(let i=array.length-1; i>0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  //pick first 10
  return array;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}




//LOGGING IN
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", loginUser);
function loginUser(){
  event.preventDefault();
  let name = event.target.querySelector("#username").value;
  // console.log(event.target.querySelector("#username"))
  if(name === ""){
    alert("Username can't be empty!");
  }
  else{
    const loginForm = document.getElementById("login-form");
    loginForm.remove();
    containers();
  }
}



function containers(){
  const mainContainer = document.getElementById("main-container");
  let loginChange = document.createElement("div");
  loginChange.id = "login-change";
  loginChange.innerHTML = `
  <div class="box">
  <h2>Welcome! Choose an option below:</h2>
    <div class="inner-box">
      <button id="new-quiz" class="create text">Create a New Quiz</button>
    </div>
    <div id="flex-container">
      <div><span class="span-text"> Prizes </span></div>
      <div><span class="span-text"> Past Scores </span></div>
      </div>
      <div class="bottom-box">
      <button class="logout text">Logout</button>
    </div>
  </div>
  `
  mainContainer.append(loginChange);
  const newQuizButton = document.getElementById("new-quiz");
  newQuizButton.addEventListener("click", newQuiz)
}


function newQuiz(){
  document.getElementById("login-change").remove();
  fetch("http://localhost:3000/quizzes")
  .then(response => response.json())
  .then(quizzes => slapQuizzesOnDom(quizzes))
}

const subContainerDiv = document.getElementById("sub-container")

let cloneOfQuiz;
//SLAP ON DOM
function slapQuizzesOnDom(quizzes){
  let oneQuiz = shuffleArray(quizzes).slice(0,1)
  oneQuiz.forEach(function(quiz){
    showQuiz(quiz);
    cloneOfQuiz=quiz
  })
}

let number = 1;
let score = 0

function showQuiz(quiz, number){
  console.log(quiz)
 const mainContainer = document.getElementById("main-container");
 let scoreButton = document.createElement("button")
 scoreButton.id = "scr-btn";
 scoreButton.innerHTML = `
 <div>
   <div><span class="span-text-2"> Current Score: ${quiz.score} </span></div>
 </div>
   `
 subContainerDiv.append(scoreButton)

 let questions = quiz.questions;
 console.log(questions)

 let maxNum = questions.length;
 let randNum = getRandomInt(0, maxNum)
 console.log(randNum)
 singleQuestion(questions[randNum])
 // }
}


function singleQuestion(question){
   console.log(question)
  let answerArray = []
  answerArray.push(question.correct_answer, question.incorrect_answer_a, question.incorrect_answer_b, question.incorrect_answer_c)

  let correct = question.correct_answer;

  let mixedAns =  shuffleArray(answerArray);

  const mainContainer = document.getElementById("main-container");
  let quizDiv = document.createElement("div");
  quizDiv.id = "quiz-div";
  quizDiv.innerHTML = `
  <div class="question-content">${question.query}</div>
  <div id="ans-btn" class="answers">
     <button class="answer-button">${mixedAns[0]}</button>
     <button class="answer-button">${mixedAns[1]}</button>
     <button class="answer-button">${mixedAns[2]}</button>
     <button class="answer-button">${mixedAns[3]}</button>
  </div>
  `

  quizDiv.addEventListener("mouseover", func1, false);
  quizDiv.addEventListener("mouseout", func2, false);


  mainContainer.append(quizDiv)

const answerDiv = document.getElementById("quiz-div")
 answerDiv.addEventListener("click", function(event){
   if (event.target.className === "answer-button"){

         if(event.target.classList.contains("answer-button")){
           if(event.target.innerText === correct){
             score += 10;
             console.log("correct")
             event.target.setAttribute("style", "background-color:green;")
           }
           else {
             console.log("false")
             event.target.setAttribute("style", "background-color:red;")
           }
         }
   }

   let scoreButton = document.getElementById("scr-btn")
   setTimeout(function() {
     quizDiv.remove();
     scoreButton.remove();

     number++
     if(number < 11){
       showQuiz(cloneOfQuiz, number)
     }
     else{
       printScore();
     }

   }, 200);

 })

}

function func1(){
  if(event.target.classList.contains("answer-button")){
   event.target.setAttribute("style", "background-color:yellow;")
  }
}

function func2(){
  if(event.target.classList.contains("answer-button")){
   event.target.setAttribute("style", "background-color:")
  }
}

function printScore(){
  const resultsContainer = document.getElementById("results-div");

  mainContainer.remove();
  let scoreDiv = document.createElement("div");
  scoreDiv.innerHTML = `
    <h2>YOU HAVE COMPLETED THE CHALLENGE</h2>
    <h2>THIS IS YOUR SCORE</h2>
    <h1>${score}</h1>
    <p>return right and wrong answers</p>
  `

  resultsContainer.append(scoreDiv)
}


function fetchUsers(){
  fetch("http://localhost:3000/users")
  .then(response => response.json())
  .then(mainOptionsDiv)
}

//MAIN PAGE OPTIONS
function mainOptions(){
  let startQuiz = document.createElement("div");
  div.className = "main_options";
  mainOptionsDiv.append(div)
}






////
