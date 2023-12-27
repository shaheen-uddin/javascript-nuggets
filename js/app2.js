const person = {
    name: 'john'
};
console.log(person.name);
person.age = 25;
console.log(person);

const items = {
    'featured-items': ['item1', 'item2']
}
console.log(items["featured-items"]);
console.log(person['name'])

let appState = 'loading';
appState = 'error'
const keyName = 'Computer';
const app = {
    [appState] : true
}
app[keyName] = 'apple';
console.log(app);

const state = {
    loading: true,
    name: '',
    job: ''
}
function updateState(key, value){
    state[key] = value;
}
updateState('job', 'cleaning');
updateState('name', 'john');
updateState('loading', false)
updateState('products', [])
updateState('name', 'peter')

console.log(state);

/**************filer, find array method**************/
const people = [
    {
        name: 'Masud Rana',
        age: 42,
        position: 'Teacher Trainer',
        salary: 50000
    },
      {
        name: 'Intazul Kazol',
        age: 40,
        position: 'Record Keeper',
        salary: 30000
    },
      {
        name: 'Nazrul Islam',
        age: 35,
        position: 'Office Assistant',
        salary: 20000
    },
      {
        name: 'Nuruddin Abul Kalam',
        age: 56,
        position: 'Training Specialist',
        salary: 105000
    },
      {
        name: 'Mohammad Abdur Rahman',
        age: 48,
        position: 'Assistant Director',
        salary: 75000
        
    },
      {
        name: 'Roshana Bilkis',
        age: 54,
        position: 'Director',
        salary: 85000
    }
];

const fruits =['orange', 'apple', 'lemon', 'mango', 'guava'] 

const youngPeople = people.filter((person) => person.position === 'Director').map(p => `<h3>${p.name}`).join('');
const target1 = document.querySelector('.persons');
target1.innerHTML = youngPeople;
console.log(youngPeople)

const senior = people.filter(p => p.position === 'Director')
console.log(senior[0].name)

const peter = people.find(p => p.name ==='peter') 
console.log(peter)

const fruit = fruits.find(f => f==='guava')
console.log(fruit)

/******************************Array Reducer****************************************/
const dailyTotal = people.reduce((total, person) => {
    console.log(total)
    console.log(person.name+': '+ person.salary)
    total += person.salary;
    return total
}, 0)

console.log(dailyTotal)