

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

  loginChange.innerHTML = `
  <div class="box">
  <h2>Welcome! Choose an option below:</h2>
    <div class="inner-box">
      <button class="create">Create a New Quiz</button>
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










//FETCH QUIZZES
function fetchQuizzes(){
  fetch("http://localhost:3000/quizzes")
  .then(response => response.json())
  .then(data => console.log(data))
}


function slapQuizzesOnDom(data){
  const ul = document.getElementById("quizzes-ul");

  data.results.forEach(function(quiz){
    let li = document.createElement("li");
    li.innerHTML = `
      <p>${quiz.question}</p>
    `

    ul.append(li)
  })
}
