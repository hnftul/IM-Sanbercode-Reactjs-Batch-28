import React, { useContext, useEffect } from "react"
import './daftarNilaiList.css'
import { DaftarNilaiContext } from "./daftarNilaiContext"

const DaftarNilaiList = () => {
  
  const { daftarNilai, fetchStatus, setFetchStatus, functions} = useContext(DaftarNilaiContext)
  const { fetch, functionDelete, functionEdit} = functions

  useEffect(()=>{
    if(fetchStatus){
      fetch()
      setFetchStatus(false)
    }
  },[fetch, fetchStatus, setFetchStatus])

  const handleDelete = (event) => {
    let idMahasiswa = parseInt(event.target.value)
    functionDelete(idMahasiswa)
  }

  const handleEdit = (event) => {
    let idMahasiswa = parseInt(event.target.value)
    functionEdit(idMahasiswa)
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
    </>
  )
}

export default DaftarNilaiList