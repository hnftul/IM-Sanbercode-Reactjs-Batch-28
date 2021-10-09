import React, {useContext, useEffect} from "react";
import '../App.css';
import { MobileContext } from "../Context/mobileContext"

const Body = () => {
    const {fetchStatus, setFetchStatus, dataMobile, functions} = useContext(MobileContext)
    const {getPrice, getPlatform, getSize, fetchData} = functions

    useEffect(() => {
        if(fetchStatus){
            fetchData()
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    return(
        <>
            <div className="row" >
                <div className="section" style={{boxShadow: '0px 10px 20px #cfcfcf'}}>
                    <div className="card">
                        <h1><b>Popular Mobile Apps</b></h1>
                        {dataMobile !== null && (
                            <>
                                {
                                    dataMobile.map((val, index) => {
                                        return(
                                            <div key={val.id}>
                                                <h2>{val.name}</h2>
                                                <h5>Release Year : {val.release_year}</h5>
                                                <img className="fakeimg" style={{width: '50%', height: '300px', objectFit: 'cover'}} src={val.image_url} />
                                                <br />
                                                <br />
                                                <div>
                                                    <strong>Price: {getPrice(val.price)}</strong><br />
                                                    <strong>Rating: {val.rating}</strong><br />
                                                    <strong>Size: {getSize(val.size)}</strong><br />
                                                    <strong style={{marginRight: '10px'}}>Platform : {getPlatform(val.is_android_app, val.is_ios_app)} </strong>
                                                    <br />
                                                </div>
                                                <p>
                                                    <strong style={{marginRight: '10px'}}>Description :</strong>
                                                    {val.description}
                                                </p>

                                                <hr />
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Body

