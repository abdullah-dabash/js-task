let name = prompt("Please enter your name:");
console.log("Hello, " + name + "!");

let gender;

function checkgender() {
  while (true) {
    var inputGender = prompt("Enter your gender");
    console.log(inputGender);
    if (inputGender === "male") {
      gender = "mr.";
      alert("Welcome " + gender + " " + name);
      break;
    } else if (inputGender === "female") {
      gender = "ms.";
      alert("Welcome " + gender + " " + name);
      break;
    } else {
      alert("Gender should be male or female");
      gender = "";
    }
  }
}

checkgender();

let order = prompt("What do you want to order (donut/bakery/coffee/ice cream)?");
console.log(order);
alert("Your order is being prepared :)");
console.log(gender + name + " " + order);

const data = [name, gender, order];
console.log(data);

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}


let hero = document.getElementById("hero");
let text = document.createElement("p");
text.innerText = "intoduction asdasdasdasdasdasdasdasdas";
hero.appendChild(text);

const div = document.getElementById("newdiv");
let p = document.createElement("p");
p.innerText = "Your info";
let ol = document.createElement("ol");
let liname = document.createElement("li");
liname.textContent = name;
let ligender = document.createElement("li");
ligender.textContent = gender;
let liorder = document.createElement("li");
liorder.textContent = order;
div.appendChild(p);
div.appendChild(ol);
ol.appendChild(liname);
ol.appendChild(ligender);
ol.appendChild(liorder);

