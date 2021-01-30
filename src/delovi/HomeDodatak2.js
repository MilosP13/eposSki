import React from 'react'
import './HomeDodatak2.css';
import ski2 from '../img/ski2.png'

function HomeDodatak2() {
    return (
        <div>
            <div>
            <>
       <div className='home-info-dodatak2' >
        <div className='info-main-dodatak2'>
          <div className='red info-red-dodatak2' > 
            <div className='col-dodatak2'>
              <div className='info-text-dodatak2'>
                
                <h1>
                  LJUBITELJ STE <br></br> KLIZANJA?
                </h1>
                <br>
                </br>
                <h2> Ne brinite, mislili smo i na vas. Naša ustanova nudi vam DVA terena za klizanje koja su u odličnom stanju.
                     Oprema vam predstavlja najmanji problem, jer vam mi takođe nudimo i mogućnost iznajmljivanja klizaljki i kaciga.
                     Ako ste oduvek želeli da naučite da klizate, onda ste došli na pravo mesto, jer kod nas se možete učlaniti i u školu klizanja
                     i prepustiti profesionalnim trenerima da vas nauče svemu sto vam je potrebno da postanete odlični skijaši.
                </h2>
                
              </div>
            </div>
            <div className='col-dodatak2'>
              <div className='info-img-dodatak2'>
              <img alt="ski "src={ski2} className='ski2' />
              </div>
            </div>
           </div>
         </div>
       </div> 
    </>
        </div>
        </div>
    )
}

export default HomeDodatak2
