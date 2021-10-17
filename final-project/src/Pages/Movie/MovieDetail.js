import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../../Context/MovieContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const MovieDetail = () => {
    const [game, setGame] = useState([])
    let { Id } = useParams();
    const { functions } = useContext(MovieContext)
    const { detail, ratings} = functions
    const back = <FontAwesomeIcon icon={faArrowLeft} style ={{marginTop:'20px', fontSize:'30px', cursor:'pointer'}}/>

    useEffect(() => {
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${Id}`)
            .then(res => {
                let data = res.data
                setGame(data)
            })
            window.scrollTo(0, 0)
    },[])

  return (
    
    <>
        <div className="carousel-containers">
            <div className="carousels">
                {game !== null && (
                    <>
                        <div className="slider">
                            <div className="slide-content">
                                <Link style={{color:'unset'}} to="/movie"> {back} </Link>
                                <h1 className="movie-title" style = {{marginTop:'50px'}}>{game.title}</h1>
                                <p style ={{color:'gray', marginBottom:'60px'}}>{detail(game.year, game.duration, game.genre)}</p>
                                <p style ={{marginBottom:'40px'}}>{game.description}</p>
                                <p style ={{marginBottom:'120px'}}>Review: {game.review}</p>
                                <h3 style ={{color:'gray', display:'inline', bottom:'50px', position:'absolute'}}>{ratings(game.rating)} {game.rating}/10</h3>
                             </div>
                            <img src={game.image_url} alt=""/>
                         </div>                                        
                    </>
                )}
            </div>
        </div>
    </>
  );
};

export default MovieDetail;
