import React from 'react'
import { Button } from './Button';
import './FormaK1.css'
import { BsXDiamondFill} from 'react-icons/bs';
import {FaFire} from 'react-icons/fa';
import {GiCrystalize} from 'react-icons/gi';
// import formaK from '../img/formaK.png';


function FormaK1() {
    return (
        <div>
            <div className="pozadinaK">
                <div className='forma-infoK'>
                    
                    <div className='forma-desnoK'>
                        
                        <form className='formaK'>
                            <h2 className='h2sendK'>Rezervacija Ski-pass kartica</h2>
                    

                            <div className='forma-divK'>

                            <label className='forma-labelK'>Ime</label> <br></br>
                            <input className='forma-inputK' type='text' name='ime' placeholder='Unesite vaše ime' required/>

                             </div>

                             <div className='forma-divK'>

                            <label className='forma-labelK'>Prezime</label> <br></br>
                            <input className='forma-inputK' type='text' name='prezime' placeholder='Unesite vaše prezime' required/>

                             </div>

                             <div className='forma-divK'>

                            <label className='forma-labelK'>E-mail</label> <br></br>
                            <input className='forma-inputK' type='email' name='prezime' placeholder='Unesite vašu email adresu' required/>

                             </div>

                             <div className='forma-divR'>

                            <h2 className='h2sendR'>Izaberite SKI-PASS paket</h2>
                            <input className='forma-inputR' type='radio' name='radio' required /> <label id="labelPaket"  for="radio">STANDARD  <FaFire /></label> <br></br>
                            <input className='forma-inputR' type='radio' name='radio' required /> <label id="labelPaket"  for="radio"> PRO <GiCrystalize /> </label> <br></br>
                            <input className='forma-inputR' type='radio' name='radio' required /> <label id="labelPaket"  for="radio">ULTIMATE <BsXDiamondFill /> </label> <br></br>

                            </div>
                             <br></br>


                            
                            <Button type="subbmit" buttonSize='btn--large' buttonStyle='btn--outline' onClick={(e) => { window.confirm('Vaša porudzbina je evidentirana i poslata vam je na e') } } >
                                Rezerviši
                            </Button>



                        </form>
                    </div>

                    <div className='forma-levoK'>
                       <h3 id="pravila"> PRAVILA I PRIVATNOST</h3>
                        <p>Vaše lične podatke kao člana Ski kartica platforme obrađujemo isključivo za potrebe Ski kartica programa pogodnosti. 
                            Više o samoj obradi vaših ličnih podataka pročitajte u našem Obaveštenju o privatnosti. Sva polja je obavezno popuniti</p>
                        <p>Jedan registrovani korisnik ima pravo na jednu Karticu. 
                            Korisnik se postaje popunjavanjem svih obaveznih polja iz Pristupnice. 
                            Korisnik odgovara za tačnost i istinitost svih navedenih podataka.</p>
                         <p>Pravo na popuste i/ili benefite korisnik ostvaruje kupovinom kod određenih partnera u skladu sa aktuelnim pravilima.</p>

                        
                    </div>

                </div>
                </div>
        </div>
    )
}

export default FormaK1
