import { todos, displayTodo } from "./displayTodos";


// * Variables
const form = document.querySelector('form');
const input = document.querySelector('#addTodoInput'); // récupérer l'input du champ "ajouter une tâche"
console.log(form, input);

//  * Functions
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value; // valeur entrée par l'utilisateur dans l'input
  console.log(value);
  input.value = ''; // juste pour vider le texte de l'input après la validation car la page n'est pas refresh
  addTodo(value);
  displayTodo();
})

// to add todos :
const addTodo = (text) => {
  todos.push({
    text, // écriture simplifiée de text: text,
    done: false, // valeur par défaut : quand on ajoute une todo elle n'est pas encore faite
  })
}