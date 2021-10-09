import React from "react";
import '../App.css';

const About = () => {
    return(
        <>
        <div className='box'>
            <div style={{border: '2px solid #ddd'}}>
                <h1>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                <div style={{padding: '5px 20px'}}>
                    <ol>
                        <li><b>Nama: </b>Syukriyatul Hanifa</li>
                        <li><b>Email: </b>syukriyatul_hanifa@apps.ipb.ac.id</li>
                        <li><b>Sistem Operasi yang digunakan: </b>Ubuntu</li>
                        <li><b>Akun Github: </b>syukriyatulhanifa (github)</li>
                        <li><b>Akun Telegram: </b>hnftul</li>
                    </ol>
                </div>
            </div>  
        </div>        
    </>
    )
}

export default About