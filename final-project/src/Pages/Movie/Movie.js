import React, { useContext, useEffect } from "react"
import { MovieContext } from "../../Context/MovieContext";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Movie = () => {
    const { data, fetchStatus, setFetchStatus, functions } = useContext(MovieContext)
    const { fetchData, getDesc, detail, ratings} = functions
    const panah = <FontAwesomeIcon icon={faArrowRight} style ={{margin:'20px 20px 0 20px', fontSize:'20px'}}/>
    useEffect(() => {

        if(fetchStatus){
            fetchData()
            setFetchStatus(false)
        }
        window.scrollTo(0, 0)
    },[fetchStatus, setFetchStatus])

    return (
        <>  
        <div>
            <h1 className="title">Top 3 Highest Rate</h1>
            <div className="carousel-container">
                <div className="carousel">
                    {data !== null && (
                        <>
                            {data.sort((a,b) => b.rating-a.rating).map((e, index) => {
                                if (index <= 2){
                                    return(
                                        <div className="slider">
                                            <div className="slide-content">
                                                <h1 className="movie-title">{e.title}</h1>
                                                <p style ={{color:'gray', marginBottom:'60px'}}>{detail(e.year, e.duration, e.genre)}</p>
                                                <p style ={{marginBottom:'40px'}}>{e.description}</p>
                                                <p style ={{marginBottom:'120px'}}>Review: {e.review}</p>
                                                <h3 style ={{color:'gray', display:'inline', bottom:'50px', position:'absolute'}}>{ratings(e.rating)} {e.rating}/10</h3>
                                            </div>
                                            <img src={e.image_url} alt=""/>
                                        </div>
                                    )
                                }
                            })}
                        </>
                    )}
                    
                </div>
            </div>
            <h1 className="title">Latest Movie</h1>
            <div className="movies-list">
                <div className="card-container">
                    <p className="scroll">Scroll {panah} </p>
                    {data !== null && (
                        <>
                            {data.sort((a,b) => b.year-a.year).map((e, index) => {

                                return (
                                    <>
                                        <Link className="card" to={`/movie/${e.id}`}>
                                            <img src={e.image_url} className="card-img" alt=""/>
                                            <div className="card-body" >
                                                <div style={{bottom:'4%', position:'absolute', marginRight:'10px'}}>
                                                    <h2 className="name"><b>{e.title}</b></h2>
                                                    <h6 className="des"><b>{e.year} • {e.genre}</b></h6>
                                                    <h6 className="des">{getDesc(e.description, 100)} <Link style={{color:'white', fontWeight:'bold'}}to={`/movie/${e.id}`}> Read More
                                                    </Link></h6> 
                                                </div>
                                                
                                            </div>
                                        </Link>                                 
                                    </>
                                )                                
                            })}
                        </>
                    )}
                </div>                     
            </div>  
        </div>
            
        </>
    )
}

export default Movie
