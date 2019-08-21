document.addEventListener("DOMContentLoaded", function(){

const loginForm = document.getElementById("login-form")

})


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
  console.log("clicked new quiz");
  document.getElementById("login-change").remove();
  fetch("http://localhost:3000/quizzes")
  .then(response => response.json())
  .then(quizzes => slapQuizzesOnDom(quizzes))
}

//shuffle returned data
function shuffleQuizzes(quizzes){
  for(let i=quizzes.length-1; i>0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [quizzes[i], quizzes[j]] = [quizzes[j], quizzes[i]];
  }
  //pick first 10
  return quizzes.slice(0,10);
}

//SLAP ON DOM
function slapQuizzesOnDom(quizzes){
  let tenQuizzes = shuffleQuizzes(quizzes)
  tenQuizzes.forEach(function(quiz){
    showQuiz(quiz)
  })
}

function showQuiz(quiz){
  const mainContainer = document.getElementById("main-container");
  let quizUl = document.createElement("ul");

  quiz.questions.forEach(function(question){
    let li = document.createElement("li")
    li.innerHTML = `
      ${question.query}
    `
    quizUl.append(li)
  })
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
