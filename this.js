"use strict"

// GLOBAL CONTEXT
this.test= "STRING GLOBAL 123456789"
console.log(this.test);

//untuk cari version : this.process.version
console.log("version node yang digunakan : " + process.versions.node)

// CLASS CONTEXT
class phone{
  constructor(merek,jumlah,harga){
    this.merek = merek
    this.jumlah = jumlah
    this.harga = harga
  }
  print(){
    return console.log(`Nama : ${this.merek} , Jumlah : ${this.jumlah}, Harga: ${this.harga}`)
  }
}
var merek = new phone('Samsnug Galak X13','4','Rp. 1000000')
merek.print();

// RELEASE 1
