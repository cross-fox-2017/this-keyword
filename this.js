"use strict"

// GLOBAL CONTEXT
//invocations
var counter = {
  val :0,
  increment:function(){
    this.val +=1;
  }
}
counter.increment();
counter.increment();

console.log(counter.val);

// console.log(process.version)
var bro = process.version;
// console.log(bro);
var vers = (bro) => {
  this.version = bro;
  return this.version;
}
console.log(vers(bro))

// CLASS CONTEXT
class trythis{
  constructor(){
    this.word = "hello";
  }
  changeWord(){
    this.word = "what";
  }
  print(){
    return `${this.changeWord()}`;
  }
}
var hello = new trythis();
console.log(hello.print());

// RELEASE 1
// -this refers to the global object
// -this refers to the parent object inside the function
// -this refers to the newly created object inside that function
// -this refers to the first argument passed to call or apply
//
