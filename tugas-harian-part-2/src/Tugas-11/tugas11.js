import React, { useState } from "react"
import './tugas11.css'


const App = () => {
  const [daftarBuah, setDaftarBuah] = useState([
    {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
    {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
    {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
    {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
  ])
  
  const [inputData, setInputData] = useState({
    nama: "",
    hargaTotal: 0,
    beratTotal: 0
  })

  const [currentIndex, setCurrentIndex] = useState(-1)

  const handleDelete = (event) => {
    let index = parseInt(event.target.value)
    let deletedItem = daftarBuah[index]
    let newData = daftarBuah.filter((e) => {return e !== deletedItem})
    setDaftarBuah(newData)
  }

  const handleChange = (event) => {
    let value = event.target.value
    let nameofValue = event.target.name

    setInputData({...inputData, [nameofValue] : value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let newData = daftarBuah
    let { nama, hargaTotal, beratTotal} = inputData
    
    if (currentIndex === -1){
        newData = [
          ...daftarBuah,{
            nama,
            hargaTotal,
            beratTotal
          }
        ]
    } else {
        newData[currentIndex] = {nama, hargaTotal, beratTotal}
    }
    setDaftarBuah(newData)
    setInputData({
      nama: "",
      hargaTotal: 0,
      beratTotal: 0
    })
    setCurrentIndex(-1)        
  }

  const handleEdit = (event) => {
    let index = parseInt(event.target.value)
    let editValue= daftarBuah[index]
    setInputData(editValue)
    setCurrentIndex(index)
  }

  return (
    <>
      <div className="container">
        <div className="titles">
          <h1>Daftar Harga Buah</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga Total</th>
              <th>Berat Total</th>
              <th>Harga per kg</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {
              daftarBuah.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.nama}</td>
                    <td>{val.hargaTotal}</td>
                    <td>{val.beratTotal / 1000} kg</td>
                    <td>{val.hargaTotal / val.beratTotal * 1000}</td>
                    <td>
                      <button id="edit" onClick={handleEdit} value={index}>Edit</button>
                      <button id="delete" onClick={handleDelete} value={index}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className="container" style={{backgroundColor: '#f2f2f2'}}>
        <div className="titles">
          <h1>Form Daftar Harga Buah</h1>
        </div> 
        <form onSubmit={handleSubmit}>
          <label htmlFor="nama">Nama:</label>
          <input required type="text" name="nama" value={inputData.nama} onChange={handleChange} />            <label htmlFor="hargaTotal">Harga Total:</label>
          <input required type="number" name="hargaTotal" value={inputData.hargaTotal} onChange={handleChange} />
          <label htmlFor="beratTotal">Berat Total (dalam gram):</label>
          <input min = {2000} required type="number" name="beratTotal" value={inputData.beratTotal} onChange={handleChange} />
          <br></br>
          <div style={{textAlign:'center'}}>
            <button id="submit">SUBMIT</button>
          </div>
        </form> 
      </div>
    </>
  )
}

export default App