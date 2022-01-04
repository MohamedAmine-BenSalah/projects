todosArr = [];
const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
let toDoList = document.getElementById('todo-list');




let addToDo = () => {
    let inputValue = input.value;
    todosArr.push(inputValue);
    input.value = "";
    localStorage.setItem('todos',JSON.stringify(todosArr));
    
    console.log(todosArr)
    render(todosArr);
}
let parsedTodos = JSON.parse(localStorage.getItem('todos'));
if(parsedTodos) {
    todos = parsedTodos;
    render(parsedTodos);
}




function render (todos) {
    let output =""
    for(let i=0;i<todos.length;i++) {
        output+= `<li>
        
        ${todos[i]}  <button onclick="deleteFromArr()    ">Completed!</button>
        
        </li> `
    }
    toDoList.innerHTML = output 
    
    
}

function deleteFromArr() {
    console.log("deleted")
    todosArr.shift();
    localStorage.clear();
    render(todosArr);
}


