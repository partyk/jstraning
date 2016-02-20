/**
* Ukol 12
*/

"use strict";

function extend(A, B) {
  var oldPrototype = B.prototype;
  function F(){}
  F.prototype = A.prototype;
  B.prototype = new F();
  for (var k in oldPrototype){
    B.prototype[k] = oldPrototype[k];
  }
}

function  ElektrickeZarizeni(options){
  this.sirka = options.sirka;
  this.vyska = options.vyska;
  this.baterie = options.baterie;
}

ElektrickeZarizeni.prototype.specifikaceZarizeni = function(){
  return "Sirka: " + this.sirka + " , Vyska: " + this.vyska + ", Baterie: " + this.maBaterii();
}

ElektrickeZarizeni.prototype.maBaterii = function(){
  return this.baterie ? "ano" : "ne";
}


var zarizeni = new ElektrickeZarizeni({sirka:"8cm", vyska:"20cm", baterie:false})

console.log(zarizeni.specifikaceZarizeni());


function Mobil( options ) {
  ElektrickeZarizeni.call(this, options.zarizeni);
  var optionsMobil = options.mobil;
  this.nazev = optionsMobil.nazev;
  this.os = optionsMobil.os;
  this.cena = optionsMobil.cena;  
}

Mobil.prototype.oMobilu = function() {
   return "Nazev: " + this.nazev + " , OS: " + this.os + ", Cena: " + this.cena + ", " + this.specifikaceZarizeni();
}


extend(ElektrickeZarizeni, Mobil);

var iPhone = new Mobil({
  zarizeni: {
    sirka : "80mm",
    vyska : "165mm",
    baterie : true
  },
  mobil : {
    nazev : "iPhone 4",
    os : "iOS 7",
    cena : "18 000 Kč"
  }
});

console.log(iPhone.oMobilu());