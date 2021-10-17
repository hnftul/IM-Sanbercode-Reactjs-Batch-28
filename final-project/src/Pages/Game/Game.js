import React, { useContext, useEffect } from "react"
import { GameContext } from "../../Context/GameContext";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Game = () => {
    const { data, fetchStatus, setFetchStatus, functions } = useContext(GameContext)
    const { fetchData, getDesc} = functions
    const platform = <FontAwesomeIcon icon={faTabletAlt} style ={{marginRight: '9px'}}/>
    const user = <FontAwesomeIcon icon={faUser} style ={{marginRight: '9px'}}/>
    const panah = <FontAwesomeIcon icon={faArrowRight} style ={{margin:'20px 20px 0 20px', fontSize:'20px'}}/>
    useEffect(() => {

        if(fetchStatus){
            fetchData()
            setFetchStatus(false)
        }
        window.scrollTo(0, 0)

    },[fetchStatus, setFetchStatus])

    const mode  = (single, multi) => {
        if (single === 1 && multi === 0){
            return 'Single Player'
        } else if (multi === 1 && single === 0){
            return 'Multiplayer'
        } else if (single === 1 && multi === 1){
            return 'Single Player and Multiplayer'
        }
    }

    return (
        <>
            <h1 className="title">Latest Games</h1>
            <div className="carousel-container">
                <div className="carousel">
                    {data !== null && (
                        <>
                            {data.sort((a,b) => b.release-a.release).map((game, index) => {
                                if (index <= 2){
                                    return(
                                        <div className="slider">
                                            <div className="slide-content">
                                                <h1 className="movie-title">{game.name}</h1>
                                                <p style ={{color:'gray', marginBottom:'60px', fontSize:'20px'}}>{game.release} • {game.genre}</p>
                                                <p style ={{marginBottom:'10px', fontSize:'20px'}}>{platform} {game.platform}</p>
                                                <p style ={{marginBottom:'120px',fontSize:'20px'}}>{user} {mode(game.singlePlayer, game.multiplayer)}</p>
                                            </div>
                                            <img src={game.image_url} alt=""/>
                                        </div> 
                                    )
                                }
                            })}
                        </>
                    )}
                    
                </div>
            </div>
            <h1 className="title">Games Alphabetically</h1>
            <div className="movies-list">
                <div className="card-container">
                <p className="scroll">Scroll {panah} </p>
                    {data !== null && (
                        <>
                            {data.sort((a, b) => {
                                        if(a.name < b.name) { return -1; }
                                        if(a.name > b.name) { return 1; }
                                        return 0;
                                    }).map((e, index) => {
                              
                                return (
                                    <>
                                        <Link className="card" to={`/game/${e.id}`}>
                                            <img src={e.image_url} className="card-img" alt=""/>
                                            <div className="card-body" >
                                                <div style={{bottom:'4%', position:'absolute', marginRight:'10px'}}>
                                                    <h2 className="name"><b>{e.name}</b></h2>
                                                    <h6 className="des"><b>{e.release} • {e.genre} • {e.platform}</b></h6>
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
            
        </>
    )
}

export default Game
