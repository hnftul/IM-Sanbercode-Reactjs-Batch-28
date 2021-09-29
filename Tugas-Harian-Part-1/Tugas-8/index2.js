var readBooksPromise = require('./promise.js')
 
var books = [
  {name: 'LOTR', timeSpent: 3000}, 
  {name: 'Fidas', timeSpent: 2000}, 
  {name: 'Kalkulus', timeSpent: 4000}
]

var waktuAwal = 10000;
var i = 0;

function bacaBuku(books, waktuAwal, i) {
  if (books.length > i){
    readBooksPromise(waktuAwal, books[i]).then(function(sisaWaktu){
      bacaBuku(books, sisaWaktu, i + 1)
    }).catch(function(err){
      console.log(err)
    })
  }
}

bacaBuku(books, waktuAwal, i)
