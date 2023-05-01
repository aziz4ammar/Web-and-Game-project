import React from 'react'
import as from "../images/as.png";
import fg from "../images/yup.png"
import la from "../images/yep.png";
const Bodyx = () => {
  return (
    <div className='big'>
        <br />
        <br />
        <br />
        <div className="fa">
            <h1 className='x'>Hazerdous Cours </h1>
            <img className='fuck' src={fg} alt="" />
        </div>
        <div className="base"><img className='m' src={as} alt="" /></div>
        <div className='cni'>
            <h1 id='rar'>Hazerdous cours</h1>
            <h3 id='taf'>Race Till The End!</h3>
        </div>
            <br />
            <br />
            <div className='o'>
            <h4 id='hgs'>What Is Our Game?</h4>
            <p className='aqw'>This game is a car racing game wich is made to have fun!</p>
            <br />
            <div className='j'>
            <button className='but'>EXPLORE</button>
            </div>
        </div>
        <div className='cnii'>
            <img id='lmd'  src={la} alt="" />
        </div>
    </div>
  )
}

export default Bodyx