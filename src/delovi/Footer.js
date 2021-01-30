import React from 'react'
import {SiFacebook} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/ri'
import {AiFillYoutube} from 'react-icons/ai'
import './Footer.css'

function Footer() {
    return (
        <div className="main-footer">
            <div className="footer">
                <div className="redd">

                     
                    <div className="colF">
                        <h3>Kontakt</h3>
                        <a href="https://www.google.rs/maps/place/%D0%91%D0%B0%D1%98%D0%B8%D0%BD%D0%B0+%D0%91%D0%B0%D1%88%D1%82%D0%B0/@43.9712124,19.5589042,15z/data=!4m5!3m4!1s0x4759b5b3065fab8b:0x413e9e18a3c84975!8m2!3d43.9705383!4d19.5649123?hl=sr"  target="_blank" rel="noreferrer"> 
                        <ul className="lista">
                            <li>031/483-781</li>
                            <li>Bajina Bašta, Srbija</li>
                            <li>Crvica BB</li>
                        </ul>
                        </a>
                    </div>
                    
                    <div className="colF">
                        <h3>Administracija</h3>
                        <ul className="lista">
                            <li>Kristina Neškovic</li>
                            <li>Nastasja Baković</li>
                            <li>Miloš Pavlović</li>
                        </ul>
                    </div>

                    <div className="colF">
                        <h3>Društvene mreže</h3>
                        <ul className="lista">

                            <a href="https://www.facebook.com"  target="_blank" rel="noreferrer">  <li><SiFacebook/> Facebook</li> </a>
                            <a href="https://www.instagram.com"  target="_blank" rel="noreferrer">  <li><RiInstagramFill/> Instagram</li> </a>
                            <a href="https://www.youtube.com"  target="_blank" rel="noreferrer">  <li><AiFillYoutube/> Youtube</li> </a>
                        </ul>
                    </div>
                    

                    </div>
                    <hr />
                    <div className="redF">
                        <p className="col-redF">
                            &copy;2021   &nbsp; &nbsp;  Eleketonsko poslovanje 2021 | Projektni zadatak React.js | Tim KNM 
                        </p>

                </div>
            </div>   
        </div>
    )
}

export default Footer
