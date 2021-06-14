//write a program that collects a long name or phrase from users and converts it to acronym.
let words = prompt("input title");
let myArray =words.split(" ");
let acronym ="";
for(let i=0; i < myArray.length; i++){
    acronym =acronym + myArray[i][0];
}
alert("your acronym is " +acronym);