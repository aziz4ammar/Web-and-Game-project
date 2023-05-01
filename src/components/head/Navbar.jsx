import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
import { Link } from 'react-router-dom';
function Navbarx() {
  return (
    <Navbar className='dd' bg="light" expand="lg">
      <Container className='ss'>
        
          <Nav className="me-auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Link id='p' to="/Photos">
                <Nav >PHOTOS</Nav>
            </Link>
            <Link id='h' to="/"><Navbar.Brand className='n' >HOME</Navbar.Brand></Link>
        
            <Link id='a' to="/Aboutus">
            <Nav className='aa'>ABOUT US</Nav>
            </Link>
            </Navbar.Collapse>
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default Navbarx;