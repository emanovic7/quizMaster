

class Quiz {

  constructor(user_id){
    this.user_id = user_id

    fetch("http://localhost:3000/quizzes")
    .then(response => response.json())
    .then(quizzes => slapQuizzesOnDom(quizzes))
  }


}
