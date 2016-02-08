var novyPrvek = function(element, css) {
  var element = document.createElement(element);
  element.setAttribute("style", css.join(";"));
  return function(text){
    element.innerHTML = text;
    return element.outerHTML.toString();
  }
}

var mujPrvek = novyPrvek('div', ['color:red', 'width:300px']);

console.log(typeof mujPrvek('Ahoj, kamarade'));
console.log(mujPrvek('Kocicka'));
console.log(mujPrvek('Kocicka'));
console.log(mujPrvek('Kocicka'));
console.log(mujPrvek('Kocicka'));

/*
Exception: TypeError: element.innerHTML is not a function
novyPrvek/<@Scratchpad/1:5:5
@Scratchpad/1:12:20
*/