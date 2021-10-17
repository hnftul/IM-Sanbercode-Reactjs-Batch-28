import axios from "axios"
import Cookies from "js-cookie"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router"
import {
    StarOutlined,
    StarFilled
  } from '@ant-design/icons';
  
export const MovieContext = createContext()

export const MovieProvider = props => {
    let history = useHistory()
    const [data, setData] = useState([])
    const [fetchStatus, setFetchStatus] = useState(true)
    const [searchStatus, setSearchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(null)
    const [input, setInput] = useState({
        genre: "",
        description: "",
        image_url: "",
        title: "",
        duration: "",
        rating: "",
        year: "",
        review: ""
    })
    
    const fetchData = async () => {
        let result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
        let fetchResult = result.data
        setData(
            fetchResult.map((res) => {
                return {
                    id : res.id,
                    genre : res.genre,
                    description : res.description,
                    image_url : res.image_url,
                    title : res.title,
                    duration : res.duration,
                    rating : res.rating,
                    year : res.year,
                    review : res.review,
                    shorterurl: getDesc(res.image_url, 20),
                    shorterdesc: getDesc(res.description, 40),
                    shortereview: getDesc(res.review, 40),
                }
            })
        )
    }

    const fetchById = (idMobile) => {
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${idMobile}`)
        .then((res) => {
            let e = res.data
            setInput({
                id: e.id, 
                title: e.title,
                genre: e.genre,
                description: e.description,
                year: e.year,
                review: e.review,
                duration: e.duration,
                image_url: e.image_url,
                rating: e.rating,
            })
            setCurrentId(e.id)
        })
    }

    const functionSubmit = () => {
        axios.post(`https://backendexample.sanbersy.com/api/data-movie`, {
            genre : input.genre,
            description : input.description,
            image_url : input.image_url,
            title : input.title,
            duration : input.duration,
            rating : input.rating,
            year : input.year,
            review : input.review},
            {headers: {
                "Authorization" : "Bearer "+ Cookies.get('token')
            }
        }).then((res) => {
            setFetchStatus(true)
            history.push('/movie/list')
        }).catch((e) => {
            console.log(e.response.data.message)
            alert(e.response.data.message)
        })
    }

    const functionUpdate = () => {
        axios.put(`https://backendexample.sanbersy.com/api/data-movie/${currentId}`,{
            genre : input.genre,
            description : input.description,
            image_url : input.image_url,
            title : input.title,
            duration : input.duration,
            rating : input.rating,
            year : input.year,
            review : input.review},
            {headers: {
                "Authorization" : "Bearer "+ Cookies.get('token')
            }
        }).then((e) => {
            setFetchStatus(true)
            history.push('/movie/list')
        })
    }

    const functionEdit = (idMobile) => {
            axios.get(`https://backendexample.sanbersy.com/api/data-movie/${idMobile}`)
            .then((result) => {
                let fetchResult = result.data
                setInput(
                    {
                        genre: fetchResult.genre,
                        description: fetchResult.description,
                        id: fetchResult.id,
                        image_url: fetchResult.image_url,
                        title: fetchResult.title,
                        duration: fetchResult.duration,
                        rating: fetchResult.rating,
                        year: fetchResult.year,
                        review: fetchResult.review,
                    }

                )
                setCurrentId(fetchResult.id)
            })
    }
 
    const functionDelete = (idMobile) => {
        axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${idMobile}`,{
            headers: {
                "Authorization" : "Bearer "+ Cookies.get('token')
        }})
        .then(() => {
            setFetchStatus(true)
        })
    }

    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        let platform = ["is_android_app", "is_ios_app"]

        if (platform.indexOf(name) === -1) {
            setInput({ ...input, [name]: value })
        } else {
            setInput({ ...input, [name]: !input[name] })
        }

    }

    const getDesc= (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

    const detail = (year, runtime, genre) => {
        if (runtime > 60){
            let hour = Math.trunc(runtime / 60)
            let minute = runtime % 60
            return year +  " • " + hour + "h" + " " + minute + "m" + " • " + genre
        }
        else{
            return year + " • " + runtime + "m" + " • " + genre
        }
    }


    const ratings = (rate) => {
        let rating = []
        let norate = 10 - rate
        for (let i=0; i<rate; i++){
            rating.push(<StarFilled  style={{ color: "rgb(247, 228, 58)"}}/>)
        }
        for (let i = 0; i< norate ; i++){
            rating.push(<StarOutlined style={{ color: "rgb(247, 228, 58)"}} />)
        }
        return rating
    }

    const functions = {
        functionDelete,
        functionEdit,
        fetchData,
        handleChange,
        functionSubmit,
        functionUpdate,
        getDesc,
        fetchById,
        ratings,
        detail
    }

    return (
        <MovieContext.Provider value={{
            data,
            setData,
            fetchStatus,
            setFetchStatus,
            searchStatus, 
            setSearchStatus,
            currentId,
            setCurrentId,
            input,
            setInput,
            functions,

        }}>
            {props.children}
        </MovieContext.Provider>
    )


}
