function setColumnData(dataId) {
  var divs = document.getElementById('rightCol').children;
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }
  document.getElementById(dataId).style.display = "block";
}
