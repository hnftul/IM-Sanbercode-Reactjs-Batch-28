import React, { useState } from "react"
import { createContext } from "react/cjs/react.development";
import axios from "axios"
import { useHistory } from "react-router";

export const DaftarNilaiContext = createContext()

export const DaftarNilaiProvider = props => {
    let history = useHistory()
    const [daftarNilai, setDaftarNilai] = useState([])
    const [inputData, setInputData] = useState({
        id: 0,
        name: "",
        course: "",
        score: 0
    })
    const [currentId, setCurrentId] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true)

    const fetch = async () => {
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
        setDaftarNilai(result.data.map(x => {
            return {id: x.id, name: x.name, course: x.course, score: x.score}
        }))
    }

    const functionDelete = (params) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${params}`)
        .then(() => {
            setFetchStatus(true)
        })
    }

    const functionSubmit = (params) => {
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
            history.push("/tugas14")
        })
    }

    const functionUpdate = (params) => {
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
            history.push("/tugas14")       
        })
    }

    const functionEdit = (idMahasiswa) => {
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
        .then(res => {
            let data = res.data
            setInputData(data)
            setCurrentId(data.id)
        })
    }

    const fetchById = (idMahasiswa) => {
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
        .then(res => {
            let data = res.data
            setInputData(data)
            setCurrentId(data.id)
        })
    }

    const functions = {
        fetch,
        functionDelete,
        functionSubmit,
        functionUpdate,
        functionEdit,
        fetchById
    }
    return(
        <DaftarNilaiContext.Provider value = {{
            daftarNilai,
            setDaftarNilai,
            inputData,
            setInputData,
            currentId,
            setCurrentId,
            fetchStatus,
            setFetchStatus,
            functions,
            functionDelete,
            functionSubmit,
            functionUpdate,
            functionEdit,
            fetchById
        }}>

            {props.children}
        </DaftarNilaiContext.Provider>
    )
}
