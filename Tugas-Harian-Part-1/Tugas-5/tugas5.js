///// Soal 1 /////
console.log("-----SOAL 1-----")
function luasPersegiPanjang(p ,l){
  return p * l
}

function kelilingPersegiPanjang(p, l){
  return (p * 2) + (l * 2)
}

function volumeBalok(p, l, t){
  return p * l * t
}

var panjang= 12
var lebar= 4
var tinggi = 8
 
var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
var volumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(luasPersegiPanjang) 
console.log(kelilingPersegiPanjang)
console.log(volumeBalok)

///// Soal 2 /////
console.log("-----SOAL 2-----")
function introduce (nama, umur, alamat, hobi){
  return "Nama Saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobi
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) 

///// Soal 3 /////
console.log("-----SOAL 3-----")
var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]

var objectDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahunLahir: arrayDaftarPeserta[3]
}

console.log(objectDaftarPeserta)

///// Soal 4 /////
console.log("-----SOAL 4-----")
var objectBuah = [
  {nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000},
  {nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000},
  {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000},
  {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000}
]

var objectBuahFilter = objectBuah.filter(function(item){
  return item.adaBijinya == false;
})

console.log(objectBuahFilter)

///// Soal 5 /////
console.log("-----SOAL 5-----")
function tambahDataFilm(nama, durasi, genre, tahun){
  dataFilm.push({nama: nama, durasi: durasi, genre: genre, tahun: tahun})
}

var dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)

