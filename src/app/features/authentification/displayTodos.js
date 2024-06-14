// * Variables
const ul = document.querySelector('ul');
const todos = [ // créer un tableau pour contenir les todos
  { // On crée des objets car il faudra du texte et la validation ou pas de la todo
    text: "Je suis une todo",
    done: false,
  },
  {
    text: "Faire du JavaScript",
    done: true,
  },
];


// * Functions
// Créer une fonction pour pouvoir afficher ces todos sur la page :
export const displayTodo = () => {
  // Rappel : ce qui est affiché sur la page est un node
  const todosNode = todos.map((todo, index) => {  // map prend en 1er arg l'élément au singulier comme une forEach et en 2nd arg son index
    // On va donc retourner un node pour chacune des todos
    return createTodoElement(todo, index);
  });
  ul.innerHTML = ''; // pour supprimer tout ce qu'il y a à l'intérieur
  ul.append(...todosNode);  // on utilise append() car il y a plusieurs éléments à ajouter et non pas un seul. Il faut mettre en paramètre une liste de nodes et non pas un tableau de nodes. Donc on utilise le spread operator pour transformer le tableau en liste (c'est indiqué au passage de la souris sur la méthode).
};

// fonction qui a pour un role de transformer une todo en un élément html :
const createTodoElement = (todo, index) => {
  const li = document.createElement('li'); // création du noeud
  li.innerHTML = `
    <div class="flex items-center w-full">
    <span class ="todo ${todo.done ? 'done' : ''}"></span>
    <p ${todo.done ? 'class="line-through"' : ""} >${todo.text}</p>
    </div>
    <div>
    <button type="button"
    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Supprimer</button>
    </div>
    `;
  return li;
};