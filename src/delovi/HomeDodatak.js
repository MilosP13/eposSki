import React from 'react'
// import {Link} from 'react-router-dom'
// import {Button} from './Button'
import './HomeDodatak.css';
import ski1 from '../img/ski1.png'

function HomeDodatak() {
    return (
        <div>
            <>
       <div className='home-info-dodatak' >
        <div className='info-main-dodatak'>
          <div className='red info-red-dodatak' > 
            <div className='col-dodatak'>
              <div className='info-text-dodatak'>
                
                <h1>
                  SKIJAJTE NA NASIM <br></br> NAJBOLJIM STAZAMA
                </h1>
                <br>
                </br>
                <h2>Svi skijaši su dobrodošli na naše ski staze gde mogu pokazati svoje vestine ili trenirati. 
                    Ako nikada niste skijali, ne brinite, jer naša ustanova vam nudi i skolu skijanja koja ce vas nauciti da skijate 
                    na skijama ili snowbordu. Ako nemate opremu nemate ni problema, jer naša ustanova vam takođe nudi i mogućnost
                    iznajmljivanja ski-opreme za osobe svih uzrasta!
                </h2>
                
              </div>
            </div>
            <div className='col-dodatak'>
              <div className='info-img-dodatak'>
              <img alt="ski "src={ski1} className='ski1' />
              </div>
            </div>
           </div>
         </div>
       </div> 
    </>
        </div>
    )
}

export default HomeDodatak
