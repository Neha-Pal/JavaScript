//Data Types in JavaScript

let name = 'Neha';//string

let x = 56;//number

console.log(typeof(name));

console.log(x);


let a = 10<20;//boolean
console.log(typeof(a));

let age;
console.log(age);//undefined

let num = null;//null
console.log(typeof(num));

//JavaScript defines null as undefined

//Reference Datatype

// onject

let student = {
    roll : 10,
    department : 'CSE' 
};
console.log(student);
console.log(typeof(student));


//Array
let array = [3,56,4,32,221];
console.log(array);
console.log(typeof(array));


//Function
function about(){
    console.log("Brainware University");
}
about();
console.log(typeof(about));

