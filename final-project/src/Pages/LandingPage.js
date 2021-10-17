import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Gambar from '../Assets/img/lp.jpg'
const LandingPage = () => {
    return(
        <>
            
                <div className="landing">
                    <h1>Welcome</h1> 
                    <p1 style ={{fontSize: '20px', height:'100px', marginTop:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p1>
                    <Button type="primary"style={{height:'45px', borderRadius:'5px', marginTop:'50px', display:'block'}} ><Link to="/movie">GET STARTED</Link></Button>
                           
                </div>
                <img style = {{width: '100%', height: '100vh', objectFit:'cover'}} src={Gambar}/>
                
            
            
        </>

    )
    
}

export default LandingPage