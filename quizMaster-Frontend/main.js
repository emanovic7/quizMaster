

document.addEventListener("DOMContentLoaded", function(){

const loginForm = document.getElementById("login-form")

})


//LOGGING IN
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", loginUser);


function loginUser(){
  event.preventDefault();
  let name = event.target.querySelector("#username").value;
  //console.log(event.target.querySelector("#username"))
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
  const optionsDiv = document.getElementById("main_options");
  let heading = document.createElement("h2");
  heading.innerHTML = `<h2>Welcome, choose an option below</h2>`
  optionsDiv.append(heading);
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
