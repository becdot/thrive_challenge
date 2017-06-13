// What does this code log into the console?  If it doesn't log back what you'd expect, how would you fix that?

for (var i= 0; i < 5; i++) {
  var btn = document.createElement(“button”)
  btn.appendChild(document.createTextNode(“Button “ + i))
  btn.addEventListener(“click”, function(){ console.log(i); });
  document.getElementById(‘btn-container’).appendChild(btn);
}