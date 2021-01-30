// import { useEffect } from 'react';
import '../../App.css';
import Animacija from '../Animacija'
import React from 'react';
import HomeDodatak from '../HomeDodatak';
import HomeDodatak2 from '../HomeDodatak2';


function Home ()
{
    return(
        <>
        <Animacija />
        <HomeDodatak />
        <HomeDodatak2 />
        </>

    )
}


export default Home;