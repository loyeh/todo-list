const container = document.querySelector(".container");
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
  todo.textContent = input.value;
  container.appendChild(todo);
}
