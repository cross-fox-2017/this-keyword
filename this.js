"use strict"

// GLOBAL CONTEXT
// console.log(process.versions.node);
class versi_js {
  constructor() {
    this.versions = process.versions.node;
  }
  versi(){
    return this.versions;
  }
}

var versiiiii = new versi_js();

console.log(versiiiii.versi());


// CLASS CONTEXT

// RELEASE 1
// this dapat digunakan di dalam konstruktor untuk memanggil konstruktor yang lain dari kelas yang sama
// ketika digunakan pada fungsi, nilai dari this adalah objek dari fungsi itu sendiri
// ketika pada objek, nilainya adalah dirinya sendiri
// this pada objek constructor tidak memiliki nilai, hanya menggantikan untuk objek baru
