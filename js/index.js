document.querySelector('#todo-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const newTodoText = document.querySelector('#new-todo');
  const newTodoElt = document.createElement('div');
  newTodoElt.classList.add('todo-element');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', checkboxChange);
  const textNode = document.createTextNode(newTodoText.value);
  newTodoElt.appendChild(checkbox);
  newTodoElt.appendChild(textNode);
  document.querySelector('#todo-list').appendChild(newTodoElt);

  newTodoText.value = '';
});

function checkboxChange(e) {
  const parentElt = e.target.parentElement;
  parentElt.classList.toggle('completed');
}

document.querySelector('#clear-todos-btn').addEventListener('click', () => {
  document.querySelectorAll('.todo-element').forEach((todo) => {
    todo.classList.remove('completed');
  });
  document.querySelectorAll('input[type=checkbox]').forEach((checkbox) => {
    checkbox.checked = false;
  });
});

document.querySelector('#mark-todos-btn').addEventListener('click', () => {
  document.querySelectorAll('.todo-element').forEach((todo) => {
    todo.classList.add('completed');
  });
  document.querySelectorAll('input[type=checkbox]').forEach((checkbox) => {
    checkbox.checked = true;
  });
});

document.querySelector('#remove-todos-btn').addEventListener('click', () => {
  const todosList = document.querySelector('#todo-list');
  while (todosList.firstChild) todosList.removeChild(todosList.firstChild);
});
