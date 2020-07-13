// Write your code here!
main.remove();

let victory = document.createElement('h1')
victory.setAttribute("id","victory")
document.body.appendChild(victory);
victory.innerHTML = "YOUR-NAME is the champion"
let newHeader = document.querySelector('h1#victory');
