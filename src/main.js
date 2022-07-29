const todos = [
    {
        id: 1,
        text: 'aprender Javascript',
        completed: true
    },
    {
        id: 2,
        text: 'aprender ECMAScript',
        completed: true
    },
    {
        id: 3,
        text: 'aprender Vue.js',
        completed: false
    }
];

const todosList = todos.filter(todo => todo.completed);

// acima é o mesmo que: const todosList = todos.filter(function (todo) {
//   return todo.completed;
// }
console.log(todosList);

const index = todos.findIndex(todo => todo.text === 'aprender Vue.js');

// acima estamos buscando o indice do objeto que tem o texto 'aprender Vue.js'

console.log(index);

const temVue = todos.some(todos => todos.text === 'aprender Vue.js');

// acima estamos usando o some para verificar se existe algum todo com o texto aprender Vue.js

console.log(temVue);