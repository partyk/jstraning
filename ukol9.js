var novyPrvej = function(element, css) {
  var element = document.createElement(element);
  element.className = element.join(";");
  return function(text){
   return  element.appendChild(document.createTextNode(text)).toString();
  }
}

var mujPrvek = novyPrvek('div', ['color:red', 'width:300px']);

console.log(mujPrvek('Ahoj, kamarade'));
console.log(mujPrvek('Kocicka'))