'use strict'

const addButton = document.getElementById('addButton');

addButton.addEventListener('click', addTask);

function addTask() {

    const input = document.querySelector("input[type = 'text']");
    const ul = document.getElementById('tasksList');

    createTodo();

    function createTodo() {

        const li = document.createElement('li');
        const textSpan = document.createElement('span');
        const checkBox = document.createElement("input");
        checkBox.setAttribute('type','checkbox');
        textSpan.classList.add('toDoSpan');

        const toDoList = input.value;

        textSpan.append(toDoList);
        li.append(checkBox,textSpan);
        ul.appendChild(li);
        input.value = '';
    }



}
