import React from 'react'
import Navbarx from '../head/Navbar'
import Card from 'react-bootstrap/Card';
import ze from "../images/image_2023-05-01_113627416-removebg-preview.png";
import e from "../images/a.png";
import n from "../images/b.png";
import p from "../images/c.png";
import o from "../images/d.png";




function BasicExample() {
  return (
    <div className='bgt'>
        <Navbarx/>
    <div className='ea'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='lala'>
            <Card className='t' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={e} />
              <Card.Body>
                <Card.Title>Level 1</Card.Title>
                <Card.Text>
                  Some quick example photos of one of the game levels.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='t' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={n} />
              <Card.Body>
                <Card.Title>Level 2</Card.Title>
                <Card.Text>
                Some quick example photos of one of the game levels.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='t' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={p} />
              <Card.Body>
                <Card.Title>Level 3</Card.Title>
                <Card.Text>
                Some quick example photos of one of the game levels.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='t' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={o} />
              <Card.Body>
                <Card.Title>Level 4</Card.Title>
                <Card.Text>
                Some quick example photos of one of the game levels.
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
    </div>
    <img id='tt' src={ze} alt="" />
    <br />
    <br />
    </div>
  );
}

export default BasicExample;