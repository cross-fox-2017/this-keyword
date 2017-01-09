"use strict"

// GLOBAL CONTEXT
/*
Beberapa contoh methods yg ada
DTRACE_NET_SERVER_CONNECTION: [Function],
DTRACE_NET_STREAM_END: [Function],
DTRACE_HTTP_SERVER_REQUEST: [Function],
DTRACE_HTTP_SERVER_RESPONSE: [Function],
DTRACE_HTTP_CLIENT_REQUEST: [Function],
DTRACE_HTTP_CLIENT_RESPONSE: [Function],

Bisa mendapatkan versi node dengan .this: v6.4.0
Syntax: this.process.version
*/

// CLASS CONTEXT

class Hero {
  constructor(name, colour) {
    this.name = name;
    this.colour = colour;
  }
}

var hero = new Hero ("hulk", "green");
console.log(hero.name, hero.colour);

// RELEASE 1

/*
.this menurut saya mirip sebagai pointer untuk menunjukan scope yg erat berhubungan
dengan Object dimana .this tersebut dieksekusi

pada umumnya .this mengacu pada window jika context nya global
jika dieksekusi di node REPL, .this adalah global window dari node.js
jika dieksekusi di dalam object, .this adalah properties dari object tersebut
*/
