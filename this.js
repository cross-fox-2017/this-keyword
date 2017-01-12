"use strict"

class Keyword{
  constructor(params){
    this.pesan = params['pesan']
    this.version = process.versions
  }

  yahoo(){
    console.log("Node JS VERSION : "+process.versions.node);
    console.log(this.pesan);
    console.log("this.pesan Tidak akan keluar karena 'function' berada dalam method (fungsi dalam fungsi)");
    setTimeout(function(){
      console.log(this.pesan);
    },2000)
  }
}

var google = new Keyword({pesan : "Mencari"})
// console.log(google.pesan);
google.yahoo();


//This bersifat global
// namun this tidak bisa diakses dari fungsi didalam method, harus di deklarasikan dulu sebelum fungsi dalam method tersebut
