"use strict"

// GLOBAL CONTEXT

console.log(process.versions.node);



// CLASS CONTEXT
class nodeVersion {
  constructor() {
    this.version = process.versions.node
  }
  versi(){
    return this.version
  }
}

let v = new nodeVersion()

console.log(v.versi());
// RELEASE 1
