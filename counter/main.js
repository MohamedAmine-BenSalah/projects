// a simple counter project to get more comfortable with the basics of javascript! 

let count = 0;
let counter = document.getElementById("count-ele");
/* init declaration to the count as 0
   using the DOM to get the id of the counter.
   setting the counter to the count variable as it increment.
   doing the same for the variable as it decrements.

*/
function increment() {
    count++;
  counter.innerText = count;
  localStorage.setItem("number of people", counter.innerText);

}

function decrement(){
    count--
    counter.innerText = count
    localStorage.setItem('people left' ,counter.innerText)
    
}

function save(){
   let he =  document.getElementById('demo') 
    he.innerHTML = localStorage.getItem("number of people")
    let her = document.getElementById('demotwo');
    her.innerText = localStorage.getItem('people left')
}
