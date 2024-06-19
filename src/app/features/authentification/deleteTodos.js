import { todos, displayTodo } from "./displayTodos.js";

// * Variables


// * Functions
// fonction pour créer les boutons Supprimer :
export const createDelBtn = (index) => {
    const delBtn = document.createElement('button'); // création du bouton Supprimer
    delBtn.innerHTML = `
    <button type="button"
    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
    </div>
    `;

    delBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Sans e.stopPropagation(), le clic sur le bouton de suppression non seulement supprime la tâche, mais également bascule son état en raison de la propagation de l’événement de clic jusqu'au toggle défini dans displayTodos.js
        deleteTodo(index);
        // console.log(index);
    })

    return delBtn;
};

// fonction pour récupérer l'index de l'élément et le supprimer : 
const deleteTodo = (index) => {
    // console.log(index);
    todos.splice(index, 1); // index sur lequel on itère, et la fonction splice supprime quand il a 2 arguments (on lui précise notamment qu'on veut supprimer 1 seul élément)
    displayTodo();
}



// ! NB :
// Une closure est une fonction qui se souvient de son environnement lexical, même après que la fonction ait été exécutée en dehors de cet environnement. En d’autres termes, une closure permet à une fonction interne d’accéder aux variables de sa fonction parent même après que cette dernière ai terminé son exécution.

// Création de la Todo Element : Dans displayTodos.js, nous créons une liste de todos et affichons chaque todo en appelant createTodoElement. Cette fonction crée un élément li pour chaque todo et y ajoute un bouton de suppression créé par createDelBtn.
// Création du Bouton de Suppression : Dans deleteTodos.js, createDelBtn prend index comme argument et crée un bouton de suppression. L’écouteur d’événement de clic est une closure qui capture index et appelle deleteTodo avec cet index lorsqu’on clique sur le bouton.
// Fonction de Suppression : deleteTodo utilise l’index capturé pour supprimer le todo correspondant du tableau todos et met à jour l’affichage en appelant displayTodo.