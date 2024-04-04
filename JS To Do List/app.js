//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
//Event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener("click", filterTodo);
//Functions

function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i>✅</i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i>🗑️</i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append To List
    todoList.appendChild(todoDiv);
    //Clear Todo Input Value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //Delete Todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });

    }

    //Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        }
    }
    function filterTodo(e) {
        const todos = todoList.childNodes;
        todos.forEach(function (todo) { 
            const mStyle = todo.style;  
            if(mStyle != undefined && mStyle != null){
                switch (e.target.value) {
                    case "all":
                        mStyle.display = "flex";
                        break;
                    case "completed":
                        if (todo.classList.contains('completed')) {
                            mStyle.display = 'flex';
                        } else {
                            mStyle.display = "none";
                        }
                        break;
                    case "uncompleted":
                        if (todo.classList.contains('completed')){
                            mStyle.display = 'none';
                        }
                        else{
                            mStyle.display = "flex";
                        }
                        break;
                }
            }
        })
    }
