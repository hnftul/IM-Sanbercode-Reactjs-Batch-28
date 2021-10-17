import React, { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { MovieContext } from "../../Context/MovieContext"
import { message, Button } from 'antd';


const MovieForm = () => {
    let {Id} = useParams()
    const { currentId, setCurrentId, input, setInput, functions} = useContext(MovieContext)
    
    const { handleChange, fetchById, functionSubmit, functionUpdate, functionEdit } = functions

    useEffect(() => {
        if(Id !== undefined){
            fetchById(Id)
        }
        window.scrollTo(0, 0)
        return () => {
            setInput({
                genre: "",
                description: "",
                image_url: "",
                title: "",
                duration: "",
                rating: "",
                year: "",
                review: ""
            })
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentId === null) {
           functionSubmit()
           message.success('Data has been added successfully', 1);
        }else{
           functionUpdate(currentId)
           message.success('Data has been updated successfully', );
        }

        setInput({
            genre: "",
            description: "",
            image_url: "",
            title: "",
            duration: "",
            rating: "",
            year: "",
            review: ""
        })
        setCurrentId(null)
    }

    
    return (
        <>
            <div className="container">
                <h1 className='title-movie' style ={{marginTop:'10px'}}>Add Movie</h1>
                <form className="form-data" method="post" onSubmit={handleSubmit} style={{background:'#0c111b', width: "100%", borderRadius: '10px', padding: "50px", marginBottom: "20px" }}>
                    <label >Title</label>
                    <input onChange={handleChange} required type="text" name="title" placeholder="Input movie title" value={input.title} />
                    <br />
                    <br />
                    <label >Genre</label>
                    <input onChange={handleChange} required type="text" name="genre" value={input.genre} placeholder="Input movie genre"  />
                    <br />
                    <br />
                    <label >Description</label>
                    <textarea onChange={handleChange} required type="text" name="description" placeholder="Input movie description"  value={input.description} />
                    <br />
                    <br />
                    <label >Review</label>
                    <textarea onChange={handleChange} required type="number" name="review" value={input.review} placeholder="Input movie review"  />
                    <br />
                    <br />
                    <div className='left'>
                        <label >Year</label>
                        <input onChange={handleChange} required type="number" name="year" min={1980} max={2021} value={input.year} placeholder="Input movie release year"  />
                        <br />
                        <br />
                        <label >Duration</label>
                        <input onChange={handleChange} required type="number" name="duration" value={input.duration} placeholder="Input movie duration" />
                        <br />
                        <br />
                    </div>
                    <div className="right">
                        <label >Rating</label>
                        <input onChange={handleChange} required type="number" name="rating" min={0} max={10} value={input.rating} placeholder="Input movie rating" />
                        <br />
                        <br />
                        <label >Image URL</label>
                        <input onChange={handleChange} required type="text" name="image_url" value={input.image_url} placeholder="Input movie image url"  />
                        <br />
                        <br />
                    </div>
                    <br /> <br/>
                    <Button type="primary" htmlType="submit" style={{height:'45px', borderRadius:'5px'}}>Submit</Button>
                </form>
            </div>
                
           

        </>
    )
}

export default MovieForm
