let name = prompt("Please enter your name:");
console.log("Hello, " + name + "!");
function checkgender(){
while (true) {
  var gender = prompt("enter your gender");
  console.log(gender);
  var x;
  if (gender === "male") {
    x = "mr.";
    alert("welcome " + x + " " + name);
    break;
  } else if (gender === "female") {
    x = "ms.";
    alert("welcome " + x + " " + name);
    break;
  } else {
    alert("gender should be male or female");
    x = "";
  }
}
}
checkgender()
// function gender(m,f){
//   while (true) {
//   var gender = prompt("enter your gender");
//   console.log(gender);
//   var x;
//   if (m ==="male"){
//     x = "mr.";
//     alert("welcome"+ x + ""+ name);
//   }
//   else if (gender === "female") {
//         x = "ms.";
//         alert("welcome " + x + " " + name);
//       } else {
//         alert("gender should be male or female");
//         x = "";
//       }
// }

// }



let order = prompt("what do you want to order(dount/bakery/coffee/ice cream)?");
console.log(order);
alert("your order is being prepared :)");
console.log(x + name + " " + order);
const data = [name, gender, order];
let m;
console.log(data);
for (let i = 0; i < data.length; i++) {
  m = m = data[i];
  console.log(m);
}
