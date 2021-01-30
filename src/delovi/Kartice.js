import React from 'react'
import Kartica from './Kartica'
import './Kartice.css'
import skiskola from '../img/skiskola.png'
import oprema from '../img/oprema.jpg'
import staza from '../img/skistaza.jpg'
import kliz from '../img/kliz.jpg'
import planinarenje from '../img/planinarenje.jpg'

function Kartice() {
    return (
      <div className='kartice'>
        <div className='nudimo'>
      <h1 id="nudimo">ZA VAS NUDIMO</h1>
        </div>
      <div className='kartice-main'>
        <div className='kartice-okvir'>
          
            <Kartica
              src={skiskola}
              text='Prepustite se profesionalcima i naučite da skijate'
              label='Ski Škola'
              
            />
            <Kartica
              src={oprema}
              text='Uzivajte u svim pogodnostima koje naša ustanova nudi i opremi visokog kvaliteta'
              label='Ski-oprema'
              
            />
          
          
            <Kartica
              src={staza}
              text='Naša ustanova nudi vam staze sa skijanje koje su bezbedne za osobe svih uzrasta'
              label='Najbezbednije staze'
              
            />
            <Kartica
              src={kliz}
              text='Dođite i klizajte na našoj stazi klizanje. Osobe svih uzrasta su dobrodošle, a postoji mogućnost i skole-klizanja'
              label='Klizanje'
              
            />
            <Kartica
              src={planinarenje}
              text='Izberite da idete na planinarenje sa našim profesionalcima i nećete se pokajati. Uz to nudimo i mogućnost iznajmljivanja opreme za planinarenje'
              label='Planinarenje'
              // path='/'
            />
          
        </div>
      </div>
    </div>
        
    )
}

export default Kartice
