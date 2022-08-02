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
const putTodos = [
    {
        ...todos,
        completed: true
    }
]

console.log(putTodos)

// aabaixo navegamos entre os elementos do array e imprimimos o texto de cada um usando o map

const getTodos = todos.map(({ text }) => text);
console.log(getTodos);
// abaixo fiz uma destruturação para pegar apenas o text, jogando para outra variável
const { text } = todos[0];
console.log(text);

// const { id, ...rest } = todos
// console.log(rest)

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

const sum = (...params) => {
    return params.reduce((total, next) => total + next)
}


console.log(sum(5, 10, 15, 10)) // resultado 40

// const car = {
//     marca: null,
//     price: 0,
//     ano: 2023,
//     modelo: null
// }

// const civic = car
// civic.marca = 'honda'
// civic.price = 75.000
// civic.ano = 2022
// civic.modelo = 'sedan'

// console.log(civic)


// acima esse forma vai sempre reescrever car

// obs sempre que for uma classe, uma metodo construtor usar o nome da function maiúscula

function Car(marca, price, ano, modelo) {
    this.marca = marca
    this.price = price
    this.ano = ano
    this.modelo = modelo
}

// 
const argo = new Car('Fiat', 75.000, 2023, 'sedam')
const tesla = new Car('Tesla', 350.000, 2024, 'SUV')
// new chama o metodo construtor
console.log(argo, tesla)