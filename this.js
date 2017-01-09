"use strict"

// GLOBAL CONTEXT
/*
  Untuk melihat version pertama menggunakan syntax 'node' terlebih daulu, kemudian
  menuliskan process.version => (node.process.version). Dan untuk melihat method -  method
  yang ada dinode menggunakan syntax 'this'.
*/


// CLASS CONTEXT

class people {
  constructor (name){
    this.resultName = name;
  }
}

let resultPeople = new people ("Eri Irawan");
console.log(resultPeople.resultName);

// RELEASE 1
/*
  - parameter yang menggunakan this bisa dipanggil difungsi yang lain, karena sifat dari this
    adalah global.
  - apabila this digunakan di object, this bisa dipakai untuk memanggil properties object tersebut.
  - karena this sifat nya global sehingga this dapat berfungsi untuk mengembangkan nilai properties.
*/
