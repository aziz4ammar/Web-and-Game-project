import React from 'react'
import Navbarx from '../head/Navbar'
import as from "../images/as.png";
import az from "../images/aziz.png";
import ae from "../images/jiji.png";
import rap from "../images/facebook-instagram-icon3866-removebg-preview.png";
const Aboutx = () => {
  return (
    <div>
        <Navbarx/>
        <div className='ha'>
            <h1 className='ht'>Who are we?</h1>
        </div>
        <div className='ah'>
        <h3>Jihed Ben Slimen</h3>
        </div>
        <h3 className='ahh'>Aziz Ammar</h3>
        <div className='rj'>
            <p>Web Developer</p>
            <p>20 Years Old</p>
        </div>

        <div className='ra'>
            <p>Game Developer</p>
            <p>18 Years Old</p>
        </div>
        <div className='qqq'>
            <img src={as} alt="" />
            <img src={as} alt="" />
        </div>
        
        <div className='maz'>
            <img className='aziz' src={az} alt="" />
        </div>
        <div className='maj'>
            <img className='jiji' src={ae} alt="" />

        </div>
        <div className='icon'>
            <img className='yy' src={rap} alt="" />
        </div>
        <div className='iconi'>
            <img className='yy' src={rap} alt="" />
        </div>

    </div>

  )
}

export default Aboutx