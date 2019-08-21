document.addEventListener("DOMContentLoaded", function(){

  const loginForm = document.getElementById("login-form")

})
//Global Variables:
const mainContainer = document.getElementById("main-container");


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
      <button id="new-quiz" class="create">Create a New Quiz</button>
    </div>
    <div id="flex-container">
      <div> Prizes </div>
      <div> Past Scores </div>
      </div>
      <div class="bottom-box">
      <button class="logout">Logout</button>
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

//shuffle returned data
function shuffleArray(array){
  for(let i=array.length-1; i>0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  //pick first 10
  return array.slice(0,10);
}

//SLAP ON DOM
function slapQuizzesOnDom(quizzes){
  let oneQuiz = shuffleArray(quizzes).slice(0,1)
  oneQuiz.forEach(function(quiz){
    showQuiz(quiz)
  })
}

function showQuiz(quiz){
  // //countdown
  // let h3 = document.createElement("h3");
  // h3.innerText = "Quiz starting in 3..2..1"
  // mainContainer.append(h3)
  // setTimeout(function(){ h3.remove() }, 4000);

  let tenQuestions = shuffleArray(quiz.questions);
  tenQuestions.forEach(function(question){
    singleQuestion(question)
  })
}


function singleQuestion(question){
  let quizUl = document.createElement("ul");
  quizUl.id = "quiz-ul";

  let li = document.createElement("li")

  li.innerHTML = `
    <h4>${question.query}</h4>
    <button>${question.correct_answer}</button>
    <button>${question.incorrect_answer_a}</button>
    <button>${question.incorrect_answer_b}</button>
    <button>${question.incorrect_answer_c}</button>
  `

  quizUl.append(li)
  mainContainer.append(quizUl)
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
