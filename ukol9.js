var novyPrvek = function(element, css) {
  var element = document.createElement(element);
  element.className = css.join(";");
  return function(text){
    element.appendChild(document.createTextNode(text));
    return element.outerHTML.toString();
  }
}

var mujPrvek = novyPrvek('div', ['color:red', 'width:300px']);

console.log(mujPrvek('Ahoj, kamarade'));
console.log(mujPrvek('Kocicka'));