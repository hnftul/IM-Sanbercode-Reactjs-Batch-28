import React, { useContext, useEffect } from "react"
import '../Tugas-13/daftarNilaiList.css'
import { DaftarNilaiContext } from "../Tugas-13/daftarNilaiContext"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { Button } from 'antd'

const Tugas14List = () => {
  
  let history = useHistory()
  const { daftarNilai, fetchStatus, setInputData, setFetchStatus, functions} = useContext(DaftarNilaiContext)
  const { fetch, functionDelete, functionEdit, getScore} = functions

  useEffect(()=>{
    if(fetchStatus){
      fetch()
      setFetchStatus(false)
    }
    return() => {
      setInputData({
        name: "",
        course: "",
        score: 0
      })
    }
  },[fetchStatus, setFetchStatus])

  const handleDelete = (event) => {
    let idMahasiswa = parseInt(event.target.value)
    functionDelete(idMahasiswa)
  }

  const handleEdit = (event) => {
    let idMahasiswa = parseInt(event.target.value)
    functionEdit(idMahasiswa)
    history.push(`/tugas14/form/${idMahasiswa}`)
  }

  const indexNilai = (score) => {
    getScore(score)
  }

  return (
    <>
      <div id="container">
        <div className="titles">
          <h1>Daftar Nilai Mahasiswa</h1>
        </div>
        <Link to="/tugas14/form"><button id="link">Create Data</button></Link> 
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
                        <td>{getScore(val.score)}</td>
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
    </>
  )
}

export default Tugas14List