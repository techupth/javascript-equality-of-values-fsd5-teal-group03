// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); // Answer false
Object.is(0, -0); // Answer false
Object.is(NaN, 100); // Answer false
Object.is("one", "two"); // Answer false
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); // Answer false
Object.is(null, undefined); // Answer false

10 === 20; // Answer false
10 === "10" // Answer undefined
3.14 !== 3.14; // Answer false
"TechUp" !== "TechUp"; // Answer false
NaN === NaN; // Answer false
0 !== -0; // Answer false

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; // Answer false