// What does this code log into the console?  If it doesn't log back what you'd expect, how would you fix that?

// Logs '4' for every button click because by the time this function executes, the value of i = 4
for (var i= 0; i < 5; i++) {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button" + i));
  btn.addEventListener("click", function(){ console.log(i); });
  document.getElementById("btn-container").appendChild(btn);
}

// The traditional solution is to use a closure to "trap" the current value of i,
// since variable definitions using var are bound to their function scope
for (var i= 0; i < 5; i++) {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button" + i));
  // self-executing arrow function that takes the current value of i as an argument
  ((j) => btn.addEventListener("click", () => console.log(j)))(i);
  document.getElementById("btn-container").appendChild(btn);
}

// A more recent solution is to use 'let' which is block scoped instead of scoped to the function
// which means that console.log will be bound to the value of i in the block
for (let i= 0; i < 5; i++) {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button" + i));
  btn.addEventListener("click", function(){ console.log(i); });
  document.getElementById("btn-container").appendChild(btn);
}
