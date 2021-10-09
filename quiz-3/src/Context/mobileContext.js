import axios from "axios"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router";

export const MobileContext = createContext()

export const MobileProvider = props => {
    let history = useHistory()
    const [dataMobile, setDataMobile] = useState([])
    const [input, setInput] = useState({
        id: 0, 
        name: "",
        category: "",
        description: "",
        release_year: 2007,
        size: 0,
        price: 0,
        image_url: "",
        rating: 0,
        is_android_app: true,
        is_ios_app: true,
    })
    const [currentId, setCurrentId] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true)

    const [ is_ios_app, setis_ios_app] = useState(true)
    const [ is_android_app, setis_android_app] = useState(true)

    const fetchData = async () => {
        let result = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
        let data = result.data
        console.log(data)
        setDataMobile(data.map((e) => {
            return {
                id: e.id, 
                name: e.name,
                category: e.category,
                description: e.description,
                release_year: e.release_year,
                size: e.size,
                price: e.price,
                image_url: e.image_url,
                rating: e.rating,
                is_android_app: e.is_android_app,
                is_ios_app: e.is_ios_app,
                shorterurl: truncate(e.image_url, 20),
                shorterdesc: truncate(e.description, 20)
            }
        }))
    }

    const fetchById = (idMobile) => {
        axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${idMobile}`)
        .then((res) => {
            let e = res.data
            setInput({
                id: e.id, 
                name: e.name,
                category: e.category,
                description: e.description,
                release_year: e.release_year,
                size: e.size,
                price: e.price,
                image_url: e.image_url,
                rating: e.rating,
                is_android_app: e.is_android_app,
                is_ios_app: e.is_ios_app
            })
            setCurrentId(e.id)
        })
    }

    const functionCreate = () => {
        axios.post(`http://backendexample.sanbercloud.com/api/mobile-apps`, {
            name: input.name,
            category: input.category,
            description: input.description,
            release_year: input.release_year,
            size: input.size,
            price: input.price,
            image_url: input.image_url,
            rating: input.rating,
            is_android_app: input.is_android_app,
            is_ios_app: input.is_ios_app,
        }).then((res) => {
            setFetchStatus(true)
            history.push("/mobile-list")
        })
    }

    const functionUpdate = (currentId) => {
        axios.put(`http://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, {
            name: input.name,
            category: input.category,
            description: input.description,
            release_year: input.release_year,
            size: input.size,
            price: input.price,
            image_url: input.image_url,
            rating: input.rating,
            is_android_app: input.is_android_app,
            is_ios_app: input.is_ios_app,
        }).then((res) => {
            setFetchStatus(true)
            history.push("/mobile-list")
        })
    }

    const functionDelete = (idMobile) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${idMobile}`)
        .then(() => {
            setFetchStatus(true)
        })
    }

    const functionEdit = (idMobile) => {
        axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${idMobile}`)
        .then((res) => {
            let e = res.data
            setInput({
                id: e.id, 
                name: e.name,
                category: e.category,
                description: e.description,
                release_year: e.release_year,
                size: e.size,
                price: e.price,
                image_url: e.image_url,
                rating: e.rating,
                is_android_app: e.is_android_app,
                is_ios_app: e.is_ios_app
            })
            setCurrentId(e.id)
        })
    }

    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name
        setis_ios_app(!is_ios_app)
        setis_android_app(!is_android_app)
        setInput({ ...input, [name]: typeOfValue })
    }

    const getPrice = (price) => {
        if (price ===  0){
            return 'Free'
        } else {
            return 'Rp. ' + price + ',-'
        }
    }

    const getPlatform = (android, ios) => {
        if (android === 1  && ios === 1){
            return 'Android & iOS'
        } else if (android === 1 && ios === 0) {
            return 'Android'
        } else if (android === 0 && ios === 1) {
            return 'iOS'
        }
    }

    const getSize = (size) => {
        if (size >= 1000){
            return size / 1000 + " GB"
        } else {
            return size + " MB"
        }
    }
    const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};
    
    let functions = {
        functionCreate,
        functionUpdate,
        functionDelete,
        functionEdit,
        fetchData,
        handleChange,
        fetchById,
        getPrice,
        getPlatform,
        truncate,
        getSize
    }
    
    
    return (
        <MobileContext.Provider value={{
            dataMobile,
            setDataMobile,
            input, 
            setInput,
            currentId, 
            setCurrentId,
            fetchStatus, 
            setFetchStatus,
            functions,
            is_ios_app, 
            setis_ios_app,
            is_android_app, 
            setis_android_app,
        }}>
            {props.children}
        </MobileContext.Provider>
    )           
}