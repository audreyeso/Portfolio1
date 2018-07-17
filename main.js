alert("Hey! This is an alert box");

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName (){
  var name = prompt('Please enter your name');
  localStorage.setItem('name: ', name);
  myHeading.innerHTML = name;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = "All About " + storedName;
}

myButton.onclick = function() {
  setUserName();
}
