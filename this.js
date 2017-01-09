"use strict"

// GLOBAL CONTEXT
// node -> this
// Memanggil semua fungsi yang dimiliki oleh node (posisi parent)
  // process:
  //    versions:
  //     { http_parser: '2.7.0',
  //       node: '6.9.1',
  //       v8: '5.1.281.84',
  //       uv: '1.9.1',
  //       zlib: '1.2.8',
  //       ares: '1.10.1-DEV',
  //       icu: '57.1',
  //       modules: '48',
  //       openssl: '1.0.2j' },

// CLASS CONTEXT
class data {
  constructor(nama,hobi) {
    this.nama = nama
    this.hobi = hobi
  }

  tampil() {
    return `nama: ${this.nama} & hobi adalah: ${this.hobi}`;
  }
}

var jacky = new data("jacky","tidur");
console.log( jacky.tampil() );

// this.nama termasuk kategori class context, karena berada di dalam parent class (data)


// RELEASE 1

// this -> diakses di terminal, akan menjadi global variabel
// this -> berada dalam sebuah object, dipakai untuk memanggil properties yg mempunyai object tersebut
// this -> konsep OOP, digunakan mendeklarasikan public properties
//
// this di dalam class, saya pikir sama seperti variabel di global context.
// jika kita ingin memakai nilai property di dalam class, dan menggunakan nya di function lain,
// kita cukup me return this -> yang artinya akan me return semua this yang ada di dalam class, sehingga bisa digunakan di method lain
