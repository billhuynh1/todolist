// list of todo items
let todoList = []

// add todo items
function addTodo (text) {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };
    todoList.push(todo);
    console.log(todoList);
}

// selecting form element
const form = document.querySelector('.js-form');

// adding a submit event listener
form.addEventListener('submit', event => {
    // prevent page referesh on form submission
    event.preventDefault();
    // select the text input
    const input = document.querySelector('.js-todo-input');

    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
});

