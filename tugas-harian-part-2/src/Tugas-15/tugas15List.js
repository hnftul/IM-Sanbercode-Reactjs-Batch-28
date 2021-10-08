import React, { useContext, useEffect } from "react"
import '../Tugas-13/daftarNilaiList.css'
import '../index.css';
import { DaftarNilaiContext } from "../Tugas-13/daftarNilaiContext"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { Table, Button, message } from 'antd';


const Tugas15List = () => {
  
  let history = useHistory()
  const { daftarNilai, fetchStatus, setInputData, setFetchStatus, functions} = useContext(DaftarNilaiContext)
  const { fetch, functionDelete, functionEdit} = functions

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
    let idMahasiswa = parseInt(event.currentTarget.value)
    functionDelete(idMahasiswa)
    message.success('Data Terhapus', 3);
  }

  const handleEdit = (event) => {
    let idMahasiswa = parseInt(event.currentTarget.value)
    functionEdit(idMahasiswa)
    history.push(`/tugas15/form/${idMahasiswa}`)
  }

  const columns = [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'score',
      title: 'Nilai',
      dataIndex: 'score',
    },
    {
      key: 'course',
      title: 'Matkul',
      dataIndex: 'course',
    },
    {
      key: 'indexnilai',
      title: 'Index Nilai',
      dataIndex: 'indexnilai',
    },
    {
      key: 'action',
      title: 'Action',
      render: (res, index) => (
        <>
          <Button style={{margin:'0 10px', backgroundColor:'yellow', color:'white', fontWeight:"bold"}} onClick={handleEdit} value={res.id}>Edit</Button>
          <Button style={{margin:'0 10px', backgroundColor:'red', color:'white', fontWeight:"bold"}} onClick={handleDelete} value={res.id}>Delete</Button>
        </>
      ),
    },
  ];
  
  const data = daftarNilai

  return (
    <>
      <div id="container">
        <div className="titles">
          <h1>Daftar Nilai Mahasiswa</h1>
        </div>
        <Link to="/tugas15/form"><Button id="link">Create Data</Button></Link> 
        <Table columns={columns} dataSource={data} style={{}}/>
      </div>
    </>
  )
}

export default Tugas15List