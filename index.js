// Write your code here!
let main = document.querySelector("main");
main.remove();

//let newHeader = document.createElement('header');
//document.body.appendChild(newHeader);

let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Tom is the champion";
document.body.appendChild(newHeader)
