"use strict"

// GLOBAL CONTEXT

/*
  -- node
  -- this
  -- this.process
  -- this.process.version
*/

// CLASS CONTEXT

/*
  class House {
    constructor(nama, alamat) {
      this.name = nama
      this.address = alamat
    }
    getAll(){
      return console.log(`${this.name} ${this.address}`)
    }
  }

  let house = new House('Gana','Kemang IC no.2')
  house.getAll();
*/

// RELEASE 1

/*
  -- This mengarah pada objek GLOBAL
  -- Jika menjalankan node this mengarah pada spesifikasi node.js
  -- Pada saat function dipanggil atau sebuah class sudah diinstansiasi
     this mengarah pada parent objek didalam function/class tersebut
*/

console.log(process.version);
