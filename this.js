"use strict"

// GLOBAL CONTEXT
// Contoh penggunaan this dalam global context:
// Jika pemanggilan this pada node.js maka akan merujuk pada global object di node tersebut.
// Jika pemanggilan this pada browser maka global object-nya window pada browser tersebut.

// CLASS CONTEXT
// Contoh penggunaan this dalam sebuah class di JavaScript:
// "use strict"

// class House {
//   constructor(property) {
//     this.address = property["address"]
//     this.square_feet = property["square_feet"]
//     this.num_bedrooms = property["num_bedrooms"] || 3
//     this.num_baths = property["num_baths"] || 2
//     this.cost = property["cost"] || 320000
//     this.down_payment = property["down_payment"] || 0.20
//     this.sold = property["sold"] || false
//     this.short_sale = property["short_sale"]
//     this.has_tenants = property["has_tenants"] || false
//   }

//   obscure_address() {
//     return this.address.replace(/.{10}$/g, '****')
//   }

//   buy(money, good_credit) {
//     if (money >= down_payment && good_credit)
//       this.sold = true
//   }

//   down_payment() {
//     return cost * this.down_payment
//   }

//   to_s() {
//     return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath., ${this.cost}`
//   }
// }

// var komplek = new House ({address : "Jl.Kaya Raya No.1", square_feet : 100})
// console.log(komplek.to_s())

// RELEASE 1
// Output dari pemanggilan this pada node.js yaitu semua isi path maupun version di sistem node.js.
// Dan jika membuat class baru pada node.js tersebut akan bisa dipanggil lagi class-nya dengan menggunakan this.