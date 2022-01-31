const todolist = [];

  function clearTodolist(){
    const todolistBody = document.getElementById("todolistBody");
    while(todolistBody.firstChild){
      todolistBody.removeChild(todolistBody.firstChild);
    }
  }

  function removeTodoList(index){
    todolist.splice(index, 1);
    displayTodolist();
  }

  function addTodoList(index, todo){
    const tr = document.createElement("tr");
    const tdButton = document.createElement("td");
    tr.appendChild(tdButton);

    const buttonDone = document.createElement("input");
    buttonDone.type = "button";
    buttonDone.value = "Done";
    buttonDone.onclick = function (){
      removeTodoList(index);
    };
    tdButton.appendChild(buttonDone);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);

    const todolistBody = document.getElementById("todolistBody");
    todolistBody.appendChild(tr);
  }

  function displayTodolist(){
    clearTodolist();

    for (let i = 0; i < todolist.length; i++) {
      const todo = todolist[i];

      const filterText = document.getElementById("filter").value.toLowerCase();

      if(todo.toLowerCase().includes(filterText)){
        addTodoList(i, todo);
      }
    }
  }

  document.forms['todoForm'].onsubmit = function (event){
    event.preventDefault();

    const todo = document.forms['todoForm']['todo'].value;
    todolist.push(todo);

    document.forms['todoForm'].reset();

    console.info(todolist);
    displayTodolist();
  };

  const filterInput = document.getElementById("filter");
  filterInput.onkeyup = function (){
    displayTodolist();
  }
  filterInput.onkeydown = function (){
    displayTodolist();
  }

  displayTodolist();

