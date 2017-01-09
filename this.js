"use strict"

// GLOBAL CONTEXT
// Bisa, dengan cara dibawah ini
// Untuk mencari version di global tinggal tulis di node this.process.version

// CLASS CONTEXT
// Coba buat class seperti dibawah ini
// class House {
//
//   constructor(components) {
//     this.address = components['address']
//     this.square_feet = components['square_feet']
//     this.num_bedrooms = components['num_bedrooms']  || 3
//     this.num_baths = components['num_baths'] || 2
//     this.cost = components['cost'] || 320000
//     this.down_payment = components['down_payment'] || 0.20
//     this.sold = components['sold'] || false
//     this.short_sale = components['short_sale']
//     this.has_tenants = components['has_tenants'] || false
//   }
//
//   obscure_address() {
//     return this.address.replace(/.{10}$/g, '****')
//   }
//
//   buy(money, good_credit) {
//     if (money >= down_payment && good_credit)
//       this.sold = true
//   }
//
//   down_payment() {
//     return cost * this.down_payment
//   }
//
//   to_s() {
//     return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
//   }
// }
//
// var house = new House({address: "Jalan Blablabla", square_feet: 320000000})

// untuk mengakses this pada class, cukup dengan menyebut variable class nya.
// this.house.address --> maka akan keluar 'Jalan Blablabla'




// RELEASE 1
// jadi this pada global node adalah spesifikasi nodenya.
// jika kita tambahkan class baru, maka this pada node akan bertambah class baru.
// untuk mengkases this pada class tersebut adalah dengan cara menyebut variable class nya.
