import React from 'react'
import levo from '../img/levo.png'
import { Button } from './Button';
import './FormaSlanje.css'


function FormaSlanje() {
    return (
          
            <div className="pozadina">
                
                <div className='forma-info'>


                <div className='forma-levo'>
                        
                        
                        <img className='slika-levo' src={levo} alt="levo slika"/>

                    </div>





                    <div className='forma-desno'>
                        
                        <form className='forma'>
                            <h2 className='h2send'>Pošaljite poruku administratorima</h2>
                    

                            <div className='forme-div'>

                            <label className='forma-label'>Ime</label> <br></br>
                            <input className='forma-input' type='text' name='ime' placeholder='Unesite vaše ime' required/>

                             </div>

                             <div className='forme-div'>

                            <label className='forma-label'>Prezime</label> <br></br>
                            <input className='forma-input' type='text' name='prezime' placeholder='Unesite vaše prezime' required/>

                             </div>

                             <div className='forme-div'>

                            <label className='forma-label'>E-mail</label> <br></br>
                            <input className='forma-input' type='email' name='prezime' placeholder='Unesite vašu email adresu' required/>

                             </div>

                             <div className='forme-div'>

                            <label className='forma-label'>Vaša poruka </label> <br></br>
                            <textarea className='forma-input-textarea' placeholder='Unesite vašu poruku' name="poruka" cols="50" rows="10" required></textarea>

                             </div>
                             <br></br>
                            <Button buttonSize='btn--large' buttonStyle='btn--outline' onClick={(e) => { window.confirm('Vaša poruka je uspešno poslata administratorima') } }  >
                                Pošalji
                            </Button>
                        </form>
                    </div>
        


                   



                </div>
                </div>
             
            
        
    )
}

export default FormaSlanje
