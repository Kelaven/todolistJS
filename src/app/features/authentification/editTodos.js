import { todos, displayTodo } from "./displayTodos.js";


export const createTodoEditElement = (todo, index) => {
    const li = document.createElement('li');

    const input = document.createElement('input'); // input qui va contenir l'ancienne valeur de la Todo
    input.type = "text";
    input.value = todo.text;
    input.id = "inputEditBorder";

    const btnSave = document.createElement('button');
    btnSave.innerHTML = `
    <button type="button"
    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline">Sauvegarder</button>
    `;
    btnSave.addEventListener('click', e => {
        editTodo(index, input); // je mets input en arg grâce au closure afin de récupérer sa value
    })

    const btnCancel = document.createElement('button');
    btnCancel.innerHTML = `
    <button type="button"
    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline">Annuler</button>
    `;
    btnCancel.addEventListener('click', e => {
        e.stopPropagation();
        toggleEditMode(index);
    })

    li.append(input, btnCancel, btnSave);

    return li;

};

export const createEditBtn = (index) => {
    const editBtn = document.createElement('button');
    editBtn.innerHTML = `
    <button type="button"
        class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline">Modifier</button>
    `;

    editBtn.addEventListener('click', e => {
        e.stopPropagation(); // quand on édite on ne veut pas changer le statut de la Todo
        toggleEditMode(index);
    })

    return editBtn;
};

const toggleEditMode = index => {
    todos[index].editMode = !todos[index].editMode;
    displayTodo();
};

const editTodo = (index, input) => {
    const value = input.value;
    todos[index].text = value; // pour entrer notre valeur
    todos[index].editMode = false; // pour sortir du mode édition
    displayTodo();
};