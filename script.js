const users = [{
  username: "user1",
  password: "password1",
  name: 'John Doe'
},
{
  username: "user2",
  password: "password2",
  name: 'Sarah John'
},
];

function login() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const message = document.getElementById("aunthentication");


  for (const user of users) {
    //better to separate conditions by using variables for easier maintenance
    const isCorrectUsername = username.value === user.username;
    const isCorrectPassword = password.value === user.password;
    
    if (isCorrectUsername && isCorrectPassword) {
      message.textContent = `Welcome ${user.name}!`;
      return;
    } 
    else if (isCorrectUsername) {
      message.textContent = "Wrong Password.";
    } 
    else {
      message.textContent = "Wrong Password/Username.";
    }
  }
}