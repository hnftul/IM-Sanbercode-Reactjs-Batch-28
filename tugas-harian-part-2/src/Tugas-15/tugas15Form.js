import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router"
import { DaftarNilaiContext } from "../Tugas-13/daftarNilaiContext"
import '../Tugas-13/daftarNilaiList.css'
import { message } from 'antd';

const Tugas15Form = () => {

    let {slug} = useParams()
    const { inputData, setInputData, currentId, setCurrentId, functions} = useContext(DaftarNilaiContext)
    const { functionSubmit, functionUpdate, fetchById} = functions

    useEffect(()=>{
        if (slug !== undefined){
            fetchById(slug)
        } 
    },[])

    const handleChange = (event) => {
        let value = event.target.value
        let nameofValue = event.target.name
        setInputData({...inputData, [nameofValue] : value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (currentId === null){
          functionSubmit()
          message.success('Data Berhasil Ditambah', 3);
        } else {
          functionUpdate()
          message.success('Data Berhasil Diubah', 3);
        }
        setInputData({
            id: 0,
            name: "",
            course: "",
            score: 0
        })    
        setCurrentId(null)
    }

    return(
        <div className="container" style={{backgroundColor: '#f2f2f2'}}>
            <div className="titles">
                <h1>Form Nilai Mahasiswa</h1>
            </div> 
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nama:</label>
                <input required type="text" name="name" value={inputData.name} onChange={handleChange} />   

                <label htmlFor="course">Mata Kuliah:</label>
                <input required type="text" name="course" value={inputData.course} onChange={handleChange} />

                <label htmlFor="score">Nilai:</label>
                <input max ={100} min = {0} style={{width:'187px'}}required type="number" name="score" value={inputData.score} onChange={handleChange} />

                <br></br>
                <div style={{textAlign:'center'}}>
                    <button id="submit">SUBMIT</button>
                    <Link to="/tugas15"><button id="back">KEMBALI</button></Link> 
                </div>
            </form> 
        </div>
    )
}

export default Tugas15Form