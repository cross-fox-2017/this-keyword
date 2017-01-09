"use strict"

// GLOBAL CONTEXT
//untuk cari version : this.process.version
//this. nama= "hello world"
//console.log(this.nama);


// CLASS CONTEXT
/*
class person{
  constructor(nama,kelas){
    this.nama = nama
    this.kelas = kelas
  }
  print(){
    return console.log(`nama : ${this.nama} , kelas: ${this.kelas}`)
  }
}
var tim = new person('tim','crossfox')
tim.print();
*/
// RELEASE 1
/*
Yang saya pahami dari this dengan menjalankan node maka this akan memanggil attribut
nya sendiri. jika class dideklarasikan ke node maka otomatis class tersebut akan dapat
dipanggil dengan this.(class itu sendiri).
yang saya simpulkan this itu berarti tampungan beserta atribut" nya sendiri(node dalam hal ini)

*/
