var readBooks = require('./callback.js')
 
var books = [
  {name: 'LOTR', timeSpent: 3000}, 
  {name: 'Fidas', timeSpent: 2000}, 
  {name: 'Kalkulus', timeSpent: 4000},
  {name: 'komik', timeSpent: 1000}
]

var waktuAwal = 10000;
var i = 0;

function execute(books, waktuAwal, i){
  if (books.length > i){
     readBooks(waktuAwal, books[i], function(sisaWaktu){
       execute(books, sisaWaktu, i + 1)
   })
  }
}

execute(books, waktuAwal, i)
