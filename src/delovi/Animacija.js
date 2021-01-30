import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Animacija.css';
import { Link } from 'react-router-dom';

function Animacija() {
  return (
    <div className='animacija'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      
      <h1>DOĐI I SKIJAJ SA NAMA</h1>
      <p>Šta čekas?</p>
      <div className='animacija-btn'> 
      
        <Link to='/info'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Informacije
        </Button>
        </Link>

        <Link to='/ski-pass'>
        <Button
          className='btns'
          buttonStyle='btn-primary'
          buttonSize='btn--large'
          onClick={console.log('Hej')}
        >
          KUPI SKI-PASS <i className='far fa-play-circle' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default Animacija;