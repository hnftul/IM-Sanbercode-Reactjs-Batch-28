///// Soal 1 /////

var i = 2

while (i != 22){
  if (i == 2){
    console.log("LOOPING PERTAMA")
  }
  console.log(i + " - I love coding");
  i+=2;
}

var j = 20

while (j){
  if (j == 20){
    console.log("LOOPING KEDUA")
  }
  console.log(j + " - I will become a frontend developer");
  j-=2;
}

///// Soal 2 /////

for (var i = 1; i<=20; i++){
  if (i % 3 === 0 && i % 2 !== 0){
    console.log(i + " - I Love Coding")
  }
  else if (i % 2 === 0){
    console.log(i + " - Berkualitas")
  }
  else{
    console.log(i + " - Santai")
  }
}


///// Soal 3 /////

var pagar = '';

for (i = 1; i <= 7; i++) {
  for(j = 1; j <= i; j++) {
    pagar += '#';
  }
  if (i != 7){
    pagar += '\n'; 
  }
}
console.log(pagar);


///// Soal 4 /////

var kalimat=["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]
kalimat.shift()
kalimat.splice(1,1)
result = kalimat.join(" ")
console.log(result)

///// Soal 5 /////

var sayuran = []

sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge")
sayuran.sort()

for (var i = 0; i < sayuran.length; i++){
  console.log(i + 1 + ". " + sayuran[i])
}
