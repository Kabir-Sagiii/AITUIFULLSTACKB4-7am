function changeFontSize(event) {
  var Collections = document.getElementsByClassName("title");
  var h1DomElement = Collections[0];
  h1DomElement.style.fontSize = event.target.value + "px";
}

function changeColor(event) {
  var Collections = document.getElementsByClassName("title");
  var h1DomElement = Collections[0];
  h1DomElement.style.color = event.target.value;
}
