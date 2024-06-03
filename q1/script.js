let name = prompt("Please enter your name:");
console.log("Hello, " + name + "!");
let gender = prompt("enter your gender");
console.log(gender);
let x;
if (gender == "male") {
  x = "mr.";
} else if (gender == "female") {
  x = "ms.";
}
else{
    alert ("gender should be male or female")
    x ="";
}


alert("welcome " + x + " " + name);

let order = prompt("what do you want to order(dount/bakery/coffee/ice cream)?")
console.log(order)
alert ("your order is being prepared :)")
console.log(x +name+ " " + order )


