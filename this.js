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
