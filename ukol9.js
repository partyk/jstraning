var novyPrvek = function(element, css) {
  var element = document.createElement(element);
  element.setAttribute("style", css.join(";"));
  return function(text){
    element.appendChild(document.createTextNode(text));
    return element.outerHTML.toString();
  }
}

var mujPrvek = novyPrvek('div', ['color:red', 'width:300px']);

console.log(typeof mujPrvek('Ahoj, kamarade'));
console.log(mujPrvek('Kocicka'));