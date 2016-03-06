/*
 * Toto je zápisník JavaScriptu.
 *
 * Vložte kód JavaScriptu a pak na něj klepněte pravým tlačítkem nebo z nabídky Vykonat zvolte:
 * 1. Spustit pro vyhodnocení vybraného kódu (Ctrl+R),
 * 2. Prozkoumat pro otevření výsledku v průzkumníku objektů (Ctrl+I),
 * 3. Zobrazit pro vložení výsledku do komentáře za vybraný kód. (Ctrl+L)
 */

"use strict";

function A(){
  this.m1 = function(){};
}

function B(){
  this.m2 = function(){};
}

B.prototype = new A();

var o = new B();


function getAllPropertyNames( obj ) {
    var props = [];

    do {
        props= props.concat(Object.getOwnPropertyNames( obj ));
    } while ( obj = Object.getPrototypeOf( obj ) );

    return props;
}

function getAllProperty( obj ) {
    var props = [];

    do {
        if (Object.getPrototypeOf( obj )) {
          props = props.concat(Object.getOwnPropertyNames( obj )); 
        }
        //console.log(Object.getPrototypeOf( obj ) );
        //console.log(Object.getOwnPropertyNames( obj ));
        //props = props.contact(Object.getOwnPropertyNames( obj ));
        //props= props.concat(Object.getOwnPropertyNames( obj ));
    } while ( obj = Object.getPrototypeOf( obj ) );

    return props;
}

/*console.log(getAllPropertyNames(o));
console.log(getAllPropertyNames(o).length);*/

console.log(getAllProperty(o));
//console.log(getAllProperty(o).length);