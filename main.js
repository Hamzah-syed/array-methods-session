// const fruits = ['Apple', 'Banana', "Orange"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// const fruits2 = fruits.forEach((item) => {
//     console.log(item)
//     return item
// })

// const fruits2 = fruits.map((item) => {
//     console.log(item)
//     return item
// })

// console.log(fruits2)

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const arrayy2 = ['g', 'h', 'i'];

// const array3 = array1.concat(array2, arrayy2);

// console.log(array3)


// const countries = ["Nigeria", "Ghana", "Rwanda"];

// countries.push("Kenya");

// console.log(countries); // ["Nigeria","Ghana","Rwanda","Kenya"]

// countries.pop();

// console.log(countries); // ["Nigeria","Ghana","Rwanda"]

// const array1 = [1, 2, 3];
// const firstElement = array1.shift();

// console.log(array1);
// // expected output: Array [2, 3]
// console.log(firstElement);

// console.log(array1.unshift(0)) // array length

// console.log(array1)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const deletedArray = fruits.splice(2, 2, "Lemon", "Kiwi");

// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.slice(1, 2);

// console.log(result)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.join(" ");

// console.log(result)



// const array1 = [1, 30, 39, 29, 10, 41];

// console.log(array1.every((currentValue) => currentValue < 40));
// expected output: true

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);



// const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple", "Apple"];
// const index = fruits.lastIndexOf("Apple");

// console.log(index)



// const array1 = [1, 2, 3, 4];
// let tempNum = 0

// array1.forEach((num) => {
//     tempNum += num
// })

// console.log(tempNum)


// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;

// const sumWithInitial = array1.reduce((prev, curr) => prev + curr, 0);

// console.log(sumWithInitial)

// const array1 = ['one', 'two', 'three'];
// const result = array1.slice().reverse()


// console.log('array1:', result);
// console.log('orignal:', array1);


// const array1 = [1, 30, 4, 21, 100000];
// array1.sort((x, y) => x - y);

// console.log(array1);


// const array1 = [1, 30, 4, 21, 100000];
// const test = array1.toString();

// console.log(typeof test);


// const array1 = [5, 12, 8, 130, 44];

// console.log(array1.at(-2))


// const array1 = [5, 12, 8, 130, 44];

// const foundArr = array1.filter(element => element > 10);
// console.log(foundArr)


// const found = array1.find(element => element > 10);
// console.log(found);

// expected output: 12


// const found = array1.some(element => element > 10);
// console.log(found);

const tasks = [
    {
        id: 1,
        task: "Task 1",
        description: "design a website "
    },
    {
        id: 2,
        task: "Task 2",
        description: "build the website "
    },
    {
        id: 3,
        task: "Task 3",
        description: "test the website "
    },
]

// tasks.forEach((item) => {
//     console.log(item.task)
//     console.log(item.description)
//     console.log("------------------")
// })

const deleteTodo = (id) => {
    const index = tasks.findIndex((task) => task.id === id)
    tasks.splice(index, 1)
}
deleteTodo(2)

console.log(tasks)




// PROMPT YEAR WISE WORKIGN FINE
// PROMPT STRING WISE WORKIGN FINE
// BUT NOT WORKING TOGETHER
import promptSync from "prompt-sync";
let prompt = promptSync();

let favoriteCar = Number(prompt(
    "please choice from kia, suzuki,toyota or red,black,gray or year <=2021 "
)
)

let cars = [
    {
        year: 2020,
        color: "red",
        companyName: "kia"
    },

    {
        year: 2021,
        color: "black",
        companyName: "toyota"
    },

    {
        year: 2022,
        color: "gray",
        companyName: "suzuki"
    }
];


for (let i = 0; i < cars.length; i++) {
    if (favoriteCar === cars[i].color) {
        console.log("I have found my new car:", cars[i]);
        break;
    } else if (favoriteCar === cars[i].companyName) {
        console.log("I have found my new car:", cars[i]);
        break;
    } else if (favoriteCar === cars[i].year) {
        console.log("I have found my new car:", cars[i])
        break;
    }
}
