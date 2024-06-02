const container = document.querySelector(".container");

if (localStorage.getItem("container")) {
  todos = localStorage.getItem("container");
  console.log(todos);
  container.innerHTML = todos;
  // localStorage.clear();
}

const input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "Enter") {
    createTodo();
    input.value = "";
  }
});

function createTodo() {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.setAttribute("onClick", "leftClick(this)");
  todo.setAttribute("oncontextmenu", "rightClick(this)");
  todo.textContent = input.value;
  container.appendChild(todo);
  window.localStorage.setItem("container", container.innerHTML);
}

function leftClick(elem) {
  elem.classList.toggle("corrected");
  window.localStorage.setItem("container", container.innerHTML);
}

function rightClick(elem) {
  event.preventDefault();
  elem.remove();
  window.localStorage.setItem("container", container.innerHTML);
}
