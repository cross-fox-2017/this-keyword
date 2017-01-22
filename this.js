"use strict"

// GLOBAL CONTEXT
/*
dengan eksekusi this di node, versi dari node bisa kita dapatkan.

*/

// CLASS CONTEXT

/*
Berikut ini adalah class yang saya coba input di node

class House {

  constructor(argument) {
    this.address = argument['address']
    this.square_feet = argument['square_feet']
    this.num_bedrooms = argument['num_bedrooms']
    this.num_baths = argument['num_baths']
    this.cost = argument['cost']
    this.down_payment = argument['down_payment']
    this.sold = argument['sold']
    this.short_sale = argument['short_sale']
    this.has_tenants = argument['has_tenants']
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

var n = new House({address: 'Jakarta', square_feet: '500', num_bedrooms: '3', num_baths: '2',  cost: '320000', down_payment: '20%'});


*/

// RELEASE 1

/*
apabila kita sudah memanggil this maka outputnya adalah spesifikasi dari node nya termasuk versinya.
apabila paste class di node REPL, class yg sudah di input akan masuk kedalam this tersebut dan bisa
dipanggil lagi sebagai class.
*/

console.log(process.version);
