// Write your solution in this file!
const burgers = ["Humburger", "Cheeseburger"];  // array burgers (global scope)
let featuredDrink = "Strawberry Milkshake";
console.log(burgers);

// function to create new variable and assigns it a value, the pushes it to array burgers
function addBurger(newValue) {
    let newBurger = newValue  + "Flatburger"; //

    burgers.push(newValue);

    return newValue 
}

// If statement to add anotherNewBurger to the array burgers
if (true) {
    let anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
}

// function to change the value of featuredDrink to The JavaShake
function changeFearuredDrink() {
    let featuredDrink = "The JavaShake"

    return featuredDrink;
}

let result = addBurger("Flatbuger");
let result1 = changeFearuredDrink();
console.log(burgers);
console.log(featuredDrink);
console.log(result);
console.log(result1);
