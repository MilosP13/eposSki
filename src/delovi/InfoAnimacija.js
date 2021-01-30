import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import skikartica from '../img/skikartica.png'
import './InfoAnimacija.css'

function InfoAnimacija() {
    return (
        <>
       <div className='home-info' >
        <div className='info-main'>
          <div className='red info-red' > 
            <div className='col'>
              <div className='info-text'>
                
                <h1>
                  DRAGI NAŠI SKIJAŠI
                </h1>
                <p className="p-infoanim">
                Za kupovinu ski karte preko računa potrebno je dostaviti zahtev za profakturu sa podacima o vrsti i količini karata koje su predmet kupovine,
                kao i sa svim podacima o firmi na koju treba da bude predračun.
                Nakon uplate, karte se mogu podići na prodajnim mestima u ski centru na koji se kupovina odnosi.
                <br></br>
                <br></br>
                Kupovina ski pasa preko administrativne zabrane Skijališta Srbije svojim partnerima i uglednim kompanijama nude brojne mogućnosti i pogodnosti za kupovinu ski karte.
                Slobodni smo da vam ponudimo mogućnost kupovine ski karata putem administrativnih zabrana.
                </p>
                  <Link to='/ski-pass'>
                  <Button className="dugme" buttonSize='btn--medium' buttonStyle='btn--primary'>
                    KUPI SKI-PASS
                  </Button> <br></br> <br></br>
                  </Link>

                  <Link to='/forma'>
                  <Button buttonSize='btn--medium' buttonStyle='btn--outline'>
                    KONTAKTIRAJ NAS 
                  </Button>
                  </Link>
                
                  
              </div>
            </div>
            <div className='col'>
              <div className='info-img'>
                <img alt="kartica "src={skikartica} className='karticaa-img' />
              </div>
            </div>
           </div>
         </div>
       </div> 
    </>
    )
}


export default InfoAnimacija


