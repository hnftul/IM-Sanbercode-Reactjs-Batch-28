import React, { useContext, useEffect, useState } from "react"
import { MobileContext } from "../Context/mobileContext"
import { message, Button} from 'antd';
import { useParams } from "react-router"

const MobileForm = () => {

    let {slug} = useParams()
    const {input, setInput, currentId, setCurrentId, functions } = useContext(MobileContext)
    const {functionCreate, functionUpdate, handleChange, fetchById} = functions

    useEffect(() => {
        if (slug !== undefined){
            fetchById(slug)
        }
        return () => {
            setInput({ 
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
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)


        if (currentId === null) {
            functionCreate()
            message.success('Data Berhasil Ditambah', 3);
        } else {
            functionUpdate(currentId)
            message.success('Data Berhasil Diubah', 3);
        }

        setInput({
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
        setCurrentId(null)
    }

    return (
        <>
            <br />
            <br />
            <h1 style={{ textAlign: "center" }}>Mobile Apps Form</h1>
            <br />
            <form className="form-data" method="post" onSubmit={handleSubmit} style={{ width: "50%", border: "1px solid #aaa", margin: "auto", padding: "50px", marginBottom: "20px" }}>
                <strong>Name : </strong>
                <input onChange={handleChange} value={input.name} name="name" type="text" required />
                <br />
                <br />
                <strong  >Category : </strong>
                <input onChange={handleChange} value={input.category} name="category" type="text" required />
                <br />
                <br />
                <strong >Description : </strong>
                <textarea style={{ marginLeft: '0', width: '100%', height:'100px', border:'1px solid #ddd'}} onChange={handleChange} value={input.description} name="description" type="text" required />
                <br />
                <br />
                <strong >Release Year: </strong>
                <input onChange={handleChange} value={input.release_year} name="release_year" type="number" max={2021} min={2007} required/>
                <br />
                <br />
                <strong >Size : </strong>
                <input onChange={handleChange} value={input.size} name="size" type="number" required/>
                <br />
                <br />
                <strong >Price : </strong>
                <input onChange={handleChange} value={input.price} name="price" type="number" required/>
                <br />
                <br />
                <strong >Rating : </strong>
                <input onChange={handleChange} value={input.rating} name="rating" type="number" max={5} min={0} required/>
                <br />
                <br />
                <strong >Image URL: </strong>
                <input onChange={handleChange} value={input.image_url} name="image_url" type="text" />
                <br />
                <br />
                <strong >Platform: </strong>

                <input style={{height:'10px', width:'20px'}} type="checkbox" id="android" name="android" value={input.is_android_app} onChange={handleChange}/>
                <label htmlFor="android">Android</label>
                <br/>
                <input style={{height:'10px', width:'20px'}} type="checkbox" id="ios" name="ios" value={input.is_ios_app} onChange={handleChange}/>
                <label htmlFor="ios">iOS</label><br></br>
                <br />
                <br />
                <Button style={{ marginLeft: '0', width: '100%', background: 'seagreen', color: 'white', height:'40px'}} htmlType="submit">Submit</Button>
            </form>
        </>
    )
}

export default MobileForm
