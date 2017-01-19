"use strict"

// GLOBAL CONTEXT
// Untuk melihat version node yang terinstall, buka node kemudian ketik process.version.
// Sedangkan untuk melihat method-methodnya, buka node kemudian ketik this.

// CLASS CONTEXT
class NodeVersion{
  constructor() {
    this.version = process.version;
  }

  printNodeVersion() {
    console.log(this.version);
  }
}

let result = new NodeVersion()
result.printNodeVersion();

// RELEASE 1
// Jadi this bersifat global, sehingga this bisa dipanggil di scope mana saja.
// Kalau digunakan di dalam object, this bisa dipakai untuk memanggil properties object tersebut.
