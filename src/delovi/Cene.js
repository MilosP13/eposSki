import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { BsXDiamondFill} from 'react-icons/bs';
import {FaFire} from 'react-icons/fa';
import {GiCrystalize} from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Cene.css'

function Cene() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
        <div>
            <div className="cene-div">
                <div className="cene-okvir">
                    <h1 className="cene-heding">CENE SKI-PASS KARTICA</h1>
                </div>
                <div className="cene-main">
                    <Link to="/formak1" className="cene-kartice">
                        <div className="cene-kartice-info">
                            <div className="ikonica">
                                <FaFire />
                            </div>
                            <h3>Standard</h3>
                            <h4>1199.00 din</h4>
                            <p className="mesecno">mesečno</p>
                            <ul className="cene-main-mogucnost">
                                <li>Skijanje na nasim stazama</li>
                                <li>Iznajmljivanje opreme</li>
                                <li>Popust za najmladje od 15%</li>
                            </ul>
                            
                            <Button buttonSize='btn--large' buttonStyle='btn--outline'>
                                Kupi   
                            </Button>
                            
                           
                        </div>
                    </Link>
                    
                    <Link to="/formak1" className="cene-kartice">
                        <div className="cene-kartice-info">
                            <div className="ikonica">
                                <GiCrystalize />
                            </div>
                            <h3>Pro</h3>
                            <h4>1899.00 din</h4>
                            <p className="mesecno">mesečno</p>
                            <ul className="cene-main-mogucnost">
                                <li>Sve sto nudi Standard</li>
                                <li>Klizanje na nasim klizalistima</li>
                                <li>Popust od 15% u nasim restoranima</li>
                                
                            </ul>
                            <Button buttonSize='btn--large' buttonStyle='btn--outline'>
                                Kupi
                            </Button>
                        </div>
                    </Link>

                    <Link to="/formak1" className="cene-kartice">
                        <div className="cene-kartice-info">
                            <div className="ikonica">
                                <BsXDiamondFill />
                            </div>
                            <h3>Ultimate</h3>
                            <h4>3899.00 din</h4>
                            <p className="mesecno">mesečno</p>
                            <ul className="cene-main-mogucnost">
                                <li>Sve sto nudi Pro</li>
                                <li>Popusti na kupovinu opreme u nasim radnjama</li>
                                <li>Iznajmljivanje ski-cetvorocikla</li>
                                
                            </ul>
                            <Button buttonSize='btn--large' buttonStyle='btn--outline'>
                                Kupi
                            </Button>
                        </div>
                    </Link>


                </div>

            </div>
            
        </div>
        </IconContext.Provider>
    )
}

export default Cene
