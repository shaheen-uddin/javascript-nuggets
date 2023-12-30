

const person = {
  name: "john",
};
console.log(person.name);
person.age = 25;
console.log(person);

const items = {
  "featured-items": ["item1", "item2"],
};
console.log(items["featured-items"]);
console.log(person["name"]);

let appState = "loading";
appState = "error";
const keyName = "Computer";
const app = {
  [appState]: true,
};
app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};
function updateState(key, value) {
  state[key] = value;
}
updateState("job", "cleaning");
updateState("name", "john");
updateState("loading", false);
updateState("products", []);
updateState("name", "peter");

console.log(state);

/**************filer, find array method**************/
const people = [
  {
    name: "Masud Rana",
    age: 42,
    position: "Teacher Trainer",
    salary: 50000,
  },
  {
    name: "Intazul Kazol",
    age: 40,
    position: "Record Keeper",
    salary: 30000,
  },
  {
    name: "Nazrul Islam",
    age: 35,
    position: "Office Assistant",
    salary: 20000,
  },
  {
    name: "Nuruddin Abul Kalam",
    age: 56,
    position: "Training Specialist",
    salary: 105000,
  },
  {
    name: "Mohammad Abdur Rahman",
    age: 48,
    position: "Assistant Director",
    salary: 75000,
  },
  {
    name: "Roshana Bilkis",
    age: 54,
    position: "Director",
    salary: 85000,
  },
];

const fruits = ["orange", "apple", "lemon", "mango", "guava"];

const youngPeople = people
  .filter((person) => person.position === "Director")
  .map((p) => `<h3>${p.name}`)
  .join("");
const target1 = document.querySelector(".persons");
target1.innerHTML = youngPeople;
console.log(youngPeople);

const senior = people.filter((p) => p.position === "Director");
console.log(senior[0].name);

const peter = people.find((p) => p.name === "peter");
console.log(peter);

const fruit = fruits.find((f) => f === "guava");
console.log(fruit);

/******************************Array Reducer****************************************/
const dailyTotal = people.reduce((total, person) => {
  console.log(total);
  console.log(person.name + ": " + person.salary);
  total += person.salary;
  return total;
}, 0);

console.log(dailyTotal);

/**************************************JavaScript Nuggets array reduce : object example****************************************************/
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel",
    price: 499.99,
    amount: 3,
  },
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "Xiaomi Redme Note 2",
    price: 699.99,
    amount: 5,
  },
  {
    title: "Xiaomi Redme Note 5",
    price: 399.99,
    amount: 3,
  },
  {
    title: "Samsung J7 Pro",
    price: 299.99,
    amount: 6,
  },
  {
    title: "Vivo S20",
    price: 299.99,
    amount: 6,
  },
  {
    title: "Walton X80",
    price: 199.99,
    amount: 8,
  },
];

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    //count items
    total.totalItems += amount;
    //count sum
    total.cartTotal += amount * price;

    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
console.log("totalItems: " + totalItems + ", cartTotal :" + cartTotal);
let total = parseInt(cartTotal.toFixed());
console.log("totalItems: " + totalItems + ", cartTotal :" + total);

console.log(total);

const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepos = async () => {
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data)
  const newData = data.reduce(
    (total, repo) => {
      const { language } = repo;
      /*  if(language){
            if(total[language]){
                total[language] = total[language] + 1
            } else {
                total[language] = 1
            }
        } */
      if (language) {
        total.language = total.language + 1 || 1;
      }

      return total;
    },
    {
      language: 0,
    }
  );
  // console.log(newData)
};
fetchRepos();

/*******************************************Destructuring******************************************************/
const fruitNames = ["orange", "banana", "mango", "apple"];
const friends = ["Nasim", "Kazol", "Azhar", "Alif", "Asit", "Lotus", "Aminul"];

const fruit1 = fruitNames[0];
const fruit2 = fruitNames[1];
const fruit3 = fruitNames[2];
const fruit4 = fruitNames[3];
console.log(fruit1, fruit2, fruit3, fruit4);
/* 
const [, kazol, , apel, , lt] = friends;
console.log(kazol, apel, lt); */

let first = "bob";
let second = "john";

/*  let temp = second;
 console.log('temp: '+ temp)
 second = first;
 console.log('second :'+second)
 first = temp;
 console.log(first, second) */

/* [second, first] = [first, second];
console.log(first, second);
[ nasim, ...kazol] = friends; */
/* console.log(nasim, kazol); */
//console.log(rest)

/***************************Object Destructing****************************************************************/

/* const firstName = shaheen.first;
const lastName = shaheen.last;
const brother = shaheen.siblings.brother;
console.log(firstName, lastName, brother) */

const x = [1, 2, 3, 4, 5];
const [y, ...rest] = x;
console.log(y);
console.log(rest);

/* const obj = {a: 1, b: {c: 2}};
const { a } = obj;

 let  { b: {c: d},
} = obj;

log(a)
log(b) */
//console.log(b)
/* 
const numbers = []
const ob = {a: 1, b: 2}
( {a:numbers[0], b:numbers[1]}=ob) */
/* log(a)
log(b) */

const { a, ...others } = { a: 1, b: 2, c: 3 };
log(a);
log(others);

const Name = {
  first: "shaheen",
  last: "uddin",
  city: "dhaka",
  siblings: {
    brother: "tuhin",
  },
};
function log(a) {
  console.log(a);
}

/* ({first,  ...rest} = Name);
console.log(first) */
//log(rest)

const A = { p: 42, q: true };
const { p: foo, q: bar } = A;

const user = {
  id: 42,
  displayName: "jdoe",
  fullName: { firstName: "Jane", lastName: "Doe" },
};

/*********/


/** *******************/
({displayName} = user);
log(displayName)
function userId ({displayName:dname}){
  return dname;
}
function whois({displayName, fullName: {firstName: name}}){
  return `${displayName} is ${name}`
}

log(userId(user))
log(whois(user))

/***********************************Callback Function******************************************************/

function makeUpperCase (value){
  log(value.toUpperCase());
}
function reverseString(value){
  log(value.split('').reverse().join(''))
}

function handleName(name, cb){
  const fullName = `${name} smith`;
  cb(fullName);
}

/* makeUpperCase('shaheen');
handleName('Zulfiqar', makeUpperCase)
handleName('nasim', reverseString);
reverseString('tasnim zara'); */

handleName('Tasnim Sara', value =>log(value.toUpperCase()))
const btn = document.querySelector('#btn')
function callBack(e){e.target}
btn.addEventListener('click', e => {
  callBack(e)
}
  )
//array methods, setTimeout, event listeners etc.

/***************************callback hell******************************************************************/

/* 1.after 1s first red
2. after 3s second blue 4s
3.after 2s third green 6s
in sequence */

const first1 = document.querySelector('.first');
const second1 = document.querySelector('.second');
const third = document.querySelector('.third');

const btnHell = document.querySelector('.btn-hell');

btnHell.addEventListener('click', () => {
  setTimeout(() => {
    first1.style.color = 'red';
        setTimeout(() => {
          second1.style.color = 'blue';
              setTimeout(() => {
                third.style.color = 'green';
              }, 2000)
        }, 3000)
  }, 5000)
 
});

/******************************************Promise**********************************************************/




