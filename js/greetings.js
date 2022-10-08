const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem("username");

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

if (savedUsername) {
  paintGreetings(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
function onLoginSubmit(e) {
  const username = loginInput.value;
  paintGreetings(username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  e.preventDefault();
}
