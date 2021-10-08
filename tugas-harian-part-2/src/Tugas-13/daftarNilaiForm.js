import React, { useContext } from "react"
import { DaftarNilaiContext } from "./daftarNilaiContext"
import './daftarNilaiList.css'

const DaftarNilaiForm = () => {

    const { inputData, setInputData, currentId, setCurrentId, functions} = useContext(DaftarNilaiContext)
    const { functionSubmit, functionUpdate} = functions

    const handleChange = (event) => {
        let value = event.target.value
        let nameofValue = event.target.name
        setInputData({...inputData, [nameofValue] : value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (currentId === null){
          functionSubmit()
        } else {
          functionUpdate()
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
                </div>
            </form> 
        </div>
    )
}

export default DaftarNilaiForm