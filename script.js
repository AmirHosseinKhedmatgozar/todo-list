let toDos = [];
//element
const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todolist");
const filterTodo = document.querySelector(".filter-todos");
//event
toDoForm.addEventListener("submit", addNewToDo);
//functions
function addNewToDo(e) {
  e.preventDefault();
  if (!toDoInput.value) return null;

  const newToDo = {
    id: Date.now(),
    tittle: toDoInput.value,
    isCompeleted: false,
    creatAt: new Date().toISOString,
  };
  toDos.push(newToDo);
  creatToDoes(toDos);
}
function creatToDoes(todo) {
  let result = "";
  todo.forEach((element) => {
    const date = new Intl.DateTimeFormat("fa-IR", {
      day: "2-digit",
      year: "numeric",
      month: "numeric",
    }).format(element.id);
    result += `<li class="todo">
    <p class="todo__title">${element.tittle}</p>
    <span class="todo__createdAt">${date}</span>
    <button data-todo-id=${element.id}><i class="todo__check far fa-check-square"></i></button>
    <button data-todo-id=${element.id}><i class="todo__remove far fa-trash-alt"></i></button>
  </li>`;
    todoList.innerHTML = result;
    toDoInput.value = "";
  });
}

//filter

filterTodo.addEventListener("change", checkcompeleted);
function checkcompeleted(e) {
  //e.preventDefault();
  const filters = e.target.value;
  if (filters == "all") {
    creatToDoes(toDos);
  } else if (filters == "completed") {
    const filtertodoc = toDos.filter((el) => {
      return el.isCompeleted;
    });
    console.log(filtertodoc);
    creatToDoes(filtertodoc);
  } else if (filters == "uncompleted") {
    const filtertodon = toDos.filter((el) => {
      return !el.isCompeleted;
    });
    console.log(filtertodon);
    creatToDoes(filtertodon);
  } else {
    creatToDoes(toDos);
  }
}
