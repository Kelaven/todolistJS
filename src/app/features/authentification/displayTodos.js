import { createDelBtn } from "./deleteTodos.js";
import { createTodoEditElement, createEditBtn } from "./editTodos.js";

// * Variables
const ul = document.querySelector('ul');
export const todos = [ // créer un tableau pour contenir les todos
  { // On crée des objets car il faudra du texte et la validation ou pas de la todo
    text: "Je suis une todo",
    done: false,
    editMode: false,
  },
  {
    text: "Faire du JavaScript",
    done: true,
    editMode: false,
  },
];


// * Functions
// Créer une fonction pour pouvoir afficher ces todos sur la page :
export const displayTodo = () => {
  // Rappel : ce qui est affiché sur la page est un node
  const todosNode = todos.map((todo, index) => {  // map prend en 1er arg l'élément au singulier comme une forEach et en 2nd arg son index
    // On va donc retourner un node pour chacune des todos :
    if (todo.editMode) {
      return createTodoEditElement(todo, index);
    } else {
      return createTodoElement(todo, index);
    }
  });
  ul.innerHTML = ''; // pour supprimer tout ce qu'il y a déjà à l'intérieur
  ul.append(...todosNode);  // on utilise append() car il y a plusieurs éléments à ajouter et non pas un seul. Il faut mettre en paramètre une liste de nodes et non pas un tableau de nodes. Donc on utilise le spread operator pour transformer le tableau en liste (c'est indiqué au passage de la souris sur la méthode).
};

// fonction qui a pour un role de transformer une todo en un élément html :
const createTodoElement = (todo, index) => {
  const li = document.createElement('li'); // création du noeud
  const delBtn = createDelBtn(index);
  const editBtn = createEditBtn(index);
  li.innerHTML = `
    <div class="flex items-center w-full">
    <span class ="todo ${todo.done ? 'done' : ''}"></span>
    <p ${todo.done ? 'class="line-through"' : ""} >${todo.text}</p>
    </div>
    <div>
    `;
  li.addEventListener('click', () => { // pour qu'au click on puisse cocher la Todo
    toggleTodo(index); // closure
  });
  li.append(editBtn, delBtn);
  return li;
};

// fonction pour le toggle de la Todo au click :
const toggleTodo = (index) => {
  todos[index].done = !todos[index].done; // on accède à la clé "done" et on la toggle grâce au ! pour passer de true à false
  displayTodo();
};
