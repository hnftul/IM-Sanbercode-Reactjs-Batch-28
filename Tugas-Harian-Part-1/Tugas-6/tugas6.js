///// Soal 1 /////
console.log("----- SOAL 1 -----");

const luasLingkaran = (r) =>{
  return (22/7) * r * r;
}

const kelilingLingkaran = (r) =>{
  return 2 * (22/7) * r;
}

console.log(luasLingkaran(7))
console.log(kelilingLingkaran(7))

///// Soal 2 /////
console.log("\n----- SOAL 2 -----")

const introduce = (...rest) =>{
  let [nama, umur, jenisKelamin, pekerjaan] = rest;
  let panggilan = "Pak"
  if (jenisKelamin == "Perempuan"){
    panggilan = "Bu"
  }
  return `${panggilan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
}

const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan)

///// Soal 3 /////
console.log("\n----- SOAL 3 -----")

const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName, 
    fullName: function(){
      console.log(`${firstName} ${lastName}`)
    }
  }
}
  
// kode di bawah ini jangan diubah atau dihapus sama sekali
console.log(newFunction("John", "Doe").firstName)
console.log(newFunction("Richard", "Roe").lastName)
newFunction("William", "Imoh").fullName()

///// Soal 4 /////
console.log("\n----- SOAL 4 -----")

let phone = {
   name: "Galaxy Note 20",
   brand: "Samsung",
   year: 2020,
   colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

const {name, brand, year, colors} = phone;
const phoneBrand = brand;
const phoneName = name;
const [colorBronze, colorWhite, colorBlack] = colors;

// kode di bawah ini jangan dirubah atau dihapus
console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 

///// Soal 5 /////
console.log("\n----- SOAL 5 -----")
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

const {nama, jumlahHalaman, warnaSampul} = buku;
let combinedWarna = [...warnaSampul, ...warna]
let combined = {nama, jumlahHalaman, warnaSampul: combinedWarna,...dataBukuTambahan}
console.log(combined)



