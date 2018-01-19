function alertValue() {
  alert("Current Value: " +
        document.getElementById("number").textContent);
}

function incrementValue() {
  var elt = document.getElementById("number");
  elt.textContent = Number(elt.textContent) + 1;
}

function appendValue() {
  var p = document.createElement("p");
  p.textContent = document.getElementById("number").textContent;
  document.getElementById("appended").appendChild(p);
}
