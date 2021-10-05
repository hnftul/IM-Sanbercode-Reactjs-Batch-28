import React, { useEffect, useState } from "react"
import './tugas12.css'
import axios from "axios"

const App = () => {
  const [daftarNilai, setDaftarNilai] = useState([])
  const [inputData, setInputData] = useState({
    id: 0,
    name: "",
    course: "",
    score: 0
  })
  const [currentId, setCurrentId] = useState(null)
  const [fetchStatus, setFetchStatus] = useState(true)

  useEffect(()=>{
    const fetch = async () => {
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)

        setDaftarNilai(result.data.map(x => {
            return {id: x.id, name: x.name, course: x.course, score: x.score}
        }))
    }
    if(fetchStatus){
      fetch()
      setFetchStatus(false)
    }
    
  },[fetchStatus, setFetchStatus])

  const handleDelete = (event) => {
    let idMahasiswa = parseInt(event.target.value)
    axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
    .then(() => {
      setFetchStatus(true)
    })
  }

  const handleChange = (event) => {
    let value = event.target.value
    let nameofValue = event.target.name
    setInputData({...inputData, [nameofValue] : value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (currentId === null){
        axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {
            name: inputData.name,
            course: inputData.course,
            score: inputData.score
        })
        .then(res => {
            let data = res.data
            setDaftarNilai([
                ...daftarNilai, {
                    id: data.id,
                    name: data.name,
                    course: data.course,
                    score: data.score
                }
            ])
        })
    } else {
        axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {
            name: inputData.name,
            course: inputData.course,
            score: inputData.score
        })
        .then(() => {
            let singleMahasiswa = daftarNilai.find(el => el.id === currentId)
            singleMahasiswa.name = inputData.name
            singleMahasiswa.course = inputData.course
            singleMahasiswa.score = inputData.score
            setDaftarNilai([...daftarNilai]) 
        })
    }
    setInputData({
        id: 0,
        name: "",
        course: "",
        score: 0
    })    
    setCurrentId(null)
  }

  const handleEdit = (event) => {
    let idMahasiswa = parseInt(event.target.value)
    axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
    .then(res => {
      let data = res.data
      setInputData(data)
      setCurrentId(data.id)
    })
  }

  const indexNilai = (score) => {
    if (score >= 80){
        return 'A'
    } else if (score < 80 && score >= 70){
        return 'B'
    } else if (score < 70 && score >= 60){
        return 'C'
    } else if (score < 60 && score >= 50){
        return 'D'
    } else if (score < 50){
        return 'E'
    }
  }

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Daftar Nilai Mahasiswa</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Mata Kuliah</th>
              <th>Nilai</th>
              <th>Indeks Nilai</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {daftarNilai !== null && (
              <>
                {
                  daftarNilai.map((val, index) => {
                    return (
                      <tr key={val.id}>
                        <td>{index + 1}</td>
                        <td>{val.name}</td>
                        <td>{val.course}</td>
                        <td>{val.score}</td>
                        <td>{indexNilai(val.score)}</td>
                        <td>
                          <button id="edit" onClick={handleEdit} value={val.id}>Edit</button>
                          <button id="delete" onClick={handleDelete} value={val.id}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="container" style={{backgroundColor: '#f2f2f2'}}>
        <div className="title">
          <h1>Form Nilai Mahasiswa</h1>
        </div> 
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nama:</label>
          <input required type="text" name="name" value={inputData.name} onChange={handleChange} />   

          <label htmlFor="course">Mata Kuliah:</label>
          <input required type="text" name="course" value={inputData.course} onChange={handleChange} />

          <label htmlFor="score">Nilai:</label>
          <input max ={100} min = {0} style={{width:'177px'}}required type="number" name="score" value={inputData.score} onChange={handleChange} />

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