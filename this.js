"use strict"
// GLOBAL CONTEXT
// //process {
//   title: 'node',
//   version: 'v6.4.0',
// dengan this di NODE maka kita memanggil fungsi yang dimiliki node (Yang berarti posisi parent sekarang dikuasai NODE)
// maka kita bisa mengakses / memanggil fungsi seperti
// > this.process.version
// maka hasilnya adalah v6.4.0
console.log(process.version);


// CLASS CONTEXT
class person{

    constuctor(nama,umur){
        this.nama = nama
        this.umur = umur
    }

    getNama()
    {
      return this.nama;
    }

}

var irsan = new person("irsan","2000");

console.log(irsan.getNama());
// disini hasilnya irsan karena disini posisi parent sudah diisi class person, yang artiny this mewakili class,
// dimana kita bs mengakses seluruh isi variable maupun fungsi yang ada didalam class, ruang lingkupny hanya sebatas class

// RELEASE 1

// saya menganalogikan this sebagai sebuah parent / mother nature / big class, yang artinya apabila this terdapat didalam sebuah
// class irsan, maka this mewakili class itu, dan kita bisa mengakses class variable serta fungsi yang ada diclass tersebut, apabila di NODE
// kita bisa mengambil seperti fungsi process atau judul ataupun versi, apabila kita mnjalakan class person yang diatas didalam NODE, maka kitaa
// bisa mengakses class person, dengan cara
//
//*posisiny sudah didalam node
//>class person{

//>     constuctor(nama,umur){
// >        this.nama = nama
// >        this.umur = umur
// >    }
// >
// >    getNama()
// >    {
// >      return this.nama;
// >    }
// >
// > }
//
// var irsan = new person("irsan","2000");
// this.irsan.getNama();
// maka hasilnya akan "irsan"
