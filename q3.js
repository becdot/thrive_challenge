/**
 * INSTRUCTIONS
 *
 * What does this code log into the console?  If it doesn't log back what you'd expect, how would you fix that?
 */

// Logs '4' for every button click because by the time this function executes, the value of i = 4
for (var i= 0; i < 5; i++) {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button" + i));
  // By the time this executes, i = 4, regardless of which button you click on
  btn.addEventListener("click", function(){ console.log(i); });
  document.getElementById("btn-container").appendChild(btn);
}

// The traditional solution is to use a closure to "trap" the current value of i,
// since variable definitions using var are bound to the enclosing function scope
for (var i= 0; i < 5; i++) {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button" + i));
  // Self-executing function that takes the current value of i as an argument.
  // When this executes, j = whateve the value of i was at the time, so it will
  // output the number of the button clicked
  ((j) => btn.addEventListener("click", () => console.log(j)))(i);
  document.getElementById("btn-container").appendChild(btn);
}

// An even snazzier solution is to use the new ES6 keyword 'let', which is block-scoped
// instead of scoped to the function.
for (let i= 0; i < 5; i++) {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button" + i));
  // Because i is block-scoped, console.log will output the value of i at the time
  // when it was created, so clicks will output the number of their button.
  btn.addEventListener("click", function(){ console.log(i); });
  document.getElementById("btn-container").appendChild(btn);
}
