import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Meni.css';
import {Button} from './Button';
import { FaSnowboarding } from 'react-icons/fa'

function Meni() {
    const [click] = useState(false);
    
    const [button, setButton] = useState(true);
    
    // ovo ti ne treba some
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);

      
    return (
        <>
            <nav className="meni">
                <div className="meni-sadrzaj">
                    <Link to="/" className="meni-logo">
                        <h1>SKI</h1>  &nbsp; &nbsp; <FaSnowboarding />
                    </Link>
                 
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='meni-item'>
                        <Link to='/' className='meni-links' >
                            Home
                        </Link>
                    </li>

                    {/* <li className='meni-item'>
                        <Link to='/skipass' className='meni-links' >
                            Ski-pass kartice
                        </Link>
                    </li> */}

                    <li className='meni-item'>
                        <Link to='/zaVas' className='meni-links' >
                            Za Vas
                        </Link>
                    </li>

                    <li className='meni-item'>
                        <Link to='/info' className='meni-links' >
                            Informacije & Kontakt
                        </Link>
                    </li>
                    </ul>
                    <Link to='/ski-pass'>
                    {button && <Button buttonStyle='btn--outline'>SKI-PASS</Button>}
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Meni
