const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  const deletedToDo = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  toDos = deletedToDo;
  saveToDos();
}

function paintToDo(newToDoObj) {
  const list = document.createElement("li");
  list.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTodo);
  list.appendChild(deleteBtn);
  list.appendChild(span);
  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  console.log(toDoInput.value);

  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  console.log(toDos);
  paintToDo(newToDoObj);
  toDoInput.value = "";
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(a) {
  console.log(`hello ${a}!`);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
