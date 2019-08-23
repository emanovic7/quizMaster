class User {
  constructor(username){
    this.username = username;

    fetch("http://localhost:3000/users",{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.username
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))

  }




}
