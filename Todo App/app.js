function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() !== '') {

        const li = document.createElement('li');
        todoList.appendChild(li);
        const span = document.createElement('span');
        span.textContent = todoInput.value;
        li.appendChild(span);

        // Edit 
        const editButton = document.createElement('button');
        editButton.setAttribute("class", "edbtn")
        editButton.textContent = 'Edit';
        li.appendChild(editButton);
        editButton.onclick = function () {
            const newTodo = prompt("Edit your todo:", span.textContent);
            if (newTodo !== null && newTodo.trim() !== "") {
                span.textContent = newTodo.trim();
            }
        };

        // Delete 
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);
        deleteButton.onclick = function () {
            todoList.removeChild(li);
        };

        todoInput.value = ''; // Blank Input
    }
}
// Delete All
function deleteAll() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Remove all todo
}
