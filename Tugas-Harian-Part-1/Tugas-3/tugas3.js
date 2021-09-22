///// Soal 1 /////

var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama + " " + kataKedua[0].toUpperCase() + kataKedua.substr(1) +" " + kataKetiga.substr(0,6) + kataKetiga[6].toUpperCase() + " " + kataKeempat.toUpperCase());

///// Soal 2 /////

var panjangPersegiPanjang = Number("8");
var lebarPersegiPanjang = Number("5");

var alasSegitiga= Number("6");
var tinggiSegitiga = Number("7");

var kelilingPersegiPanjang = (2 * panjangPersegiPanjang) + (2 * lebarPersegiPanjang);
var luasSegitiga = (alasSegitiga * tinggiSegitiga) / 2;

console.log("Keliling Persegi Panjang = " + kelilingPersegiPanjang);
console.log("Luas Segitiga = " + luasSegitiga);

///// Soal 3 /////

var sentences= 'wah javascript itu keren sekali'; 

var firstWord= sentences.substring(0, 3); 
var secondWord = sentences.substring(4, 14);
var thirdWord = sentences.substring(15, 18);
var fourthWord = sentences.substring(19, 24);
var fifthWord = sentences.substring(25, 31);

console.log('Kata Pertama: ' + firstWord); 
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord);

//// Soal 4 ////

var nilaiJohn = 80;
var nilaiDoe = 50;

if (nilaiJohn >= 80){
  console.log('Nilai John adalah A')
} 
else if (nilaiJohn < 80 && nilaiJohn >= 70){
  console.log('Nilai John adalah B')
}
else if (nilaiJohn < 70 && nilaiJohn >= 60){
  console.log('Nilai John adalah C')
}
else if (nilaiJohn < 60 && nilaiJohn >= 50){
  console.log('Nilai John adalah D')
}
else if (nilaiJohn < 50){
  console.log('Nilai John adalah E')
}

if (nilaiDoe >= 80){
  console.log('Nilai Doe adalah A')
} 
else if (nilaiDoe < 80 && nilaiDoe >= 70){
  console.log('Nilai Doe adalah B')
}
else if (nilaiDoe < 70 && nilaiDoe >= 60){
  console.log('Nilai Doe adalah C')
}
else if (nilaiDoe < 60 && nilaiDoe >= 50){
  console.log('Nilai Doe adalah D')
}
else if (nilaiDoe < 50){
  console.log('Nilai Doe adalah E')
}

///// Soal 5 /////

var tanggal = 4;
var bulan = 8;
var tahun = 2000;

switch(bulan) {
  case 1:   { bulanL = 'Januari'; break; }
  case 2:   { bulanL = 'Februari'; break; }
  case 3:   { bulanL = 'Maret'; break; }
  case 4:   { bulanL = 'April'; break; }
  case 5:   { bulanL = 'Mei'; break; }
  case 6:   { bulanL = 'Juni'; break; }
  case 7:   { bulanL = 'Juli'; break; }
  case 8:   { bulanL = 'Agustus'; break; }
  case 9:   { bulanL = 'September'; break; }
  case 10:  { bulanL = 'Oktober'; break; }
  case 11:  { bulanL = 'November'; break; }
  case 12:  { bulanL = 'Desember'; break; }
  default:  { console.log('Bulan Invalid'); }}

console.log(tanggal + " " + bulanL + " " + tahun);
