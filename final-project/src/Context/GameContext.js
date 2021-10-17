import axios from "axios"
import Cookies from "js-cookie"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router"

export const GameContext = createContext()

export const GameProvider = props => {
    let history = useHistory()
    const [data, setData] = useState([])
    const [fetchStatus, setFetchStatus] = useState(true)
    const [searchStatus, setSearchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(null)
    const [input, setInput] = useState({
        genre: "",
        platform: "",
        image_url: "",
        singlePlayer: false,
        multiplayer: false,
        name: "",
        release: "",
    })

    const fetchData = async () => {
        let result = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)
        let fetchResult = result.data
        console.log(fetchResult)
        setData(
            fetchResult.map((res) => {
                return {
                    id : res.id,
                    genre : res.genre,
                    platform : res.platform,
                    image_url : res.image_url,
                    singlePlayer : res.singlePlayer,
                    multiplayer : res.multiplayer,
                    name : res.name,
                    release : res.release,
                    shorterurl: getDesc(res.image_url, 20),
                    single: res.singlePlayer === 0 ? "false" : "true",
                    multi: res.multiplayer === 0 ? "false" : "true"
                }
            })
        )
    }

    const fetchById = (idMobile) => {
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${idMobile}`)
        .then((res) => {
            let e = res.data
            setInput({
                id: e.id, 
                name: e.name,
                genre: e.genre,
                platform: e.platform,
                release: e.release,
                image_url: e.image_url,
                singlePlayer: e.singlePlayer,
                multiplayer: e.multiplayer
            })
            setCurrentId(e.id)
        })
    }

    const functionSubmit = () => {
        axios.post(`https://backendexample.sanbersy.com/api/data-game`, {
            genre : input.genre,
            platform : input.platform,
            image_url : input.image_url,
            singlePlayer : input.singlePlayer,
            multiplayer : input.multiplayer,
            name : input.name,
            release : input.release},
            {headers: {
                "Authorization" : "Bearer "+ Cookies.get('token')
            }
        }).then((res) => {
            setFetchStatus(true)
            history.push('/game/list')
        }).catch((e) => {
            console.log(e.response.data.message)
            alert(e.response.data.message)
        })
    }

    const functionUpdate = () => {
        axios.put(`https://backendexample.sanbersy.com/api/data-game/${currentId}`,{
            genre : input.genre,
            platform : input.platform,
            image_url : input.image_url,
            singlePlayer : input.singlePlayer,
            multiplayer : input.multiplayer,
            name : input.name,
            release : input.release},
            {headers: {
                "Authorization" : "Bearer "+ Cookies.get('token')
            }
            }).then((e) => {
                setFetchStatus(true)
                history.push('/game/list')
            })
    }

    const functionEdit = (idMobile) => {
            axios.get(`https://backendexample.sanbersy.com/api/data-game/${idMobile}`)
            .then((result) => {
                let fetchResult = result.data
                setInput(
                    {
                        genre: fetchResult.genre,
                        platform: fetchResult.platform,
                        id: fetchResult.id,
                        image_url: fetchResult.image_url,
                        singlePlayer: fetchResult.singlePlayer,
                        multiplayer: fetchResult.multiplayer,
                        name: fetchResult.name,
                        release: fetchResult.release,
                    }

                )
                setCurrentId(fetchResult.id)
            })
    }
 
    const functionDelete = (idMobile) => {
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${idMobile}`,{
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
        let platform = ["singlePlayer", "multiplayer"]

        if (platform.indexOf(name) === -1) {
            setInput({ ...input, [name]: value })
        } else {
            setInput({ ...input, [name]: !input[name] })
        }

    }

    const getDesc= (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

    const functions = {
        functionDelete,
        functionEdit,
        fetchData,
        handleChange,
        functionSubmit,
        functionUpdate,
        getDesc,
        fetchById,
      
    }

    return (
        <GameContext.Provider value={{
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
        </GameContext.Provider>
    )


}
