import React from 'react'
import { Link } from 'react-router-dom';
// import ski1 from '../img/ski1.png'

function Kartica(props) {
    return (
      <>
       
      <div className='kartica'>
        <Link className='kartica-link' to={props.path}>
          <figure className='kartica-okvir' data-category={props.label}>
            <img
              className='kartica-img'
              alt='Slika'
              src={props.src}
            />
          </figure>
          <div className='kartica-info'>
            <h5 className='kartica-text'>{props.text}</h5>
          </div>
        </Link>
      </div>
    
    </>
        
    )
}

export default Kartica
