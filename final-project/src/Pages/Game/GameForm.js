import React, { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { GameContext } from "../../Context/GameContext"
import { message, Button} from 'antd';

const MobileForm = () => {
    let {Id} = useParams()
    const { currentId, setCurrentId, input, setInput, functions} = useContext(GameContext)
    
    const { handleChange, fetchById, functionSubmit, functionUpdate } = functions

    useEffect(() => {
        if(Id !== undefined){
            fetchById(Id)
        }
        window.scrollTo(0, 0)
        return () => {
            setInput({
                genre: "",
                platform: "",
                image_url: "",
                singlePlayer: false,
                multiplayer: false,
                name: "",
                release: "",
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
           message.success('Data has been updated successfully', 1);
        }

        setInput({
            genre: "",
            platform: "",
            image_url: "",
            singlePlayer: false,
            multiplayer: false,
            name: "",
            release: "",
        })
        setCurrentId(null)
    }


    return (
        <>
            <div className="container">
                <h1 className='title-movie' style ={{marginTop:'10px'}}>Add Game</h1>
                <form className="form-data" method="post" onSubmit={handleSubmit} style={{background:'#0c111b', width: "100%", borderRadius: '10px', padding: "50px", marginBottom: "20px" }}>
                    <label >Name</label>
                    <input onChange={handleChange} required type="text" name="name" placeholder="Input game name" value={input.name} />
                    <br />
                    <br />
                    <label >Genre</label>
                    <input onChange={handleChange} required type="text" name="genre" value={input.genre} placeholder="Input game genre" />
                    <br />
                    <br />
                    <label >Platform</label>
                    <input onChange={handleChange} required type="text" name="platform" placeholder="Input game platform"  value={input.platform} />
                    <br />
                    <br />
                    <label >Year</label>
                    <input onChange={handleChange} required type="number" name="release" min={2000} max={2021} value={input.release} placeholder="Input game release year"  />
                    <br />
                    <br />
                    <label >Image URL</label>
                    <input onChange={handleChange} required type="text" name="image_url" value={input.image_url} placeholder="Input game image url" />
                    <br />
                    <br />
                    <label >Plarform</label>
                    
                    <label htmlFor="single">
                    <input style={{height:'10px', width:'20px', display: "inline-block"}}onChange={handleChange} type="checkbox" name="singlePlayer" checked={input.singlePlayer} />
                    Single Player</label>

                    <label htmlFor="multi">
                    <input style={{height:'10px', width:'20px', display: "inline-block"}} onChange={handleChange} type="checkbox" name="multiplayer" checked={input.multiplayer} />
                    MultiPlayer</label>
                    
                    <br></br>


                    <br />
                    <Button type="primary" htmlType="submit" style={{height:'45px', borderRadius:'5px'}}>Submit</Button>
                </form>
            </div>

        </>
    )
}

export default MobileForm
