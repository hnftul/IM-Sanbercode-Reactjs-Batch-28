import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const MobileDetail = () => {
    const [game, setGame] = useState([])
    let { Id } = useParams();
    const platform = <FontAwesomeIcon icon={faTabletAlt} style ={{marginRight: '9px'}}/>
    const user = <FontAwesomeIcon icon={faUser} style ={{marginRight: '9px'}}/>
    const back = <FontAwesomeIcon icon={faArrowLeft} style ={{marginTop:'20px', fontSize:'30px', cursor:'pointer'}}/>

    useEffect(() => {
        axios.get(`https://backendexample.sanbersy.com/api/data-game/${Id}`)
            .then(res => {
                let data = res.data
                setGame(data)
            })
            window.scrollTo(0, 0)
    },[])

    const mode  = (single, multi) => {
        if (single === 1){
            return 'Single Player'
        } else if (multi === 1){
            return 'Multiplayer'
        } else if (single === 0 && multi === 0){
            return 'Single Player and Multiplayer'
        }
    }
  return (

    <>
        <div className="carousel-containers">
            <div className="carousels">
                {game !== null && (
                    <>
                        <div className="slider">
                            <div className="slide-content">
                                <Link style={{color:'unset'}} to="/game"> {back} </Link>
                                <h1 className="movie-title" style = {{marginTop:'80px'}}>{game.name}</h1>
                                <p style ={{color:'gray', marginBottom:'60px', fontSize:'20px'}}>{game.release} • {game.genre}</p>
                                <p style ={{marginBottom:'10px', fontSize:'20px'}}>{platform} {game.platform}</p>
                                <p style ={{marginBottom:'120px',fontSize:'20px'}}>{user} {mode(game.singlePlayer, game.multiplayer)}</p>
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

export default MobileDetail;
