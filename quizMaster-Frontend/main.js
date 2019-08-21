

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
  loginChange.id = "login-change"
  loginChange.innerHTML = `
  <div class="box">
  <h2>Welcome! Choose an option below:</h2>
    <div class="inner-box">
      <button class="create" id="new-game-btn">Create a New Quiz</button>
    </div>
    <div id="flex-container">
      <div> Past Scores </div>
      <div> Prizes </div>
    </div>
  </div>
  `
  mainContainer.append(loginChange);
  const newGameButton = document.getElementById("new-game-btn")
  newGameButton.addEventListener("click", newGame)
}

function newGame(){
  console.log("clicked new game")
  fetch("http://localhost:3000/quizzes")
  .then(response => response.json())
  .then(data => slapQuizzesOnDom(data))
}

function slapQuizzesOnDom(data){
  let loginChange = document.getElementById("login-change");
  loginChange.remove();
  data.forEach(gameCard)
}

function gameCard(quiz){
  console.log(quiz);
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
