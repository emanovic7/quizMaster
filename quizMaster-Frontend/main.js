

document.addEventListener("DOMContentLoaded", function(){
const loginForm = document.getElementById("login-form")

 
})
  fetch("https://opentdb.com/api.php?amount=10")
  .then(response => response.json())
  .then(data => slapQuizzesOnDom(data))
  //.then(data => console.log(data.results))



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
