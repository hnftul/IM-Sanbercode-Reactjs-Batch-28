var filterBooksPromise = require('./promise2.js')

// bukunya berwarna dan jumlah halamannya 40 
filterBooksPromise(true, 40).then(function(data){
  console.log(data);
}).catch(function(err){
  console.log(err)
})

// bukunya tidak berwarna dan jumlah halamannya 250 (gunakan async/await untuk kondisi ini)
async function filterBooksPromise1(){
  try {
     const data = await filterBooksPromise(false, 250)
     console.log(data)
  } catch (error) {
    console.log(error.message);
  }
}

filterBooksPromise1()

// bukunya berwarna dan jumlah halamannya 30 (gunakan async/await untuk kondisi ini) 
async function filterBooksPromise2(){
  try {
     const data = await filterBooksPromise(true, 30)
     console.log(data)
  } catch (error) {
    console.log(error.message);
  }
}

filterBooksPromise2()

