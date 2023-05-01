import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Bodyx from './components/body/Bodyx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbarx from './components/head/Navbar';
import Aboutx from './components/about us/Aboutx';
import Photos from './components/Photos/Photos';

function App() {
  return (
    <div className="App">
    <br/>
    
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<><Navbarx/><Bodyx/></>}/>
        <Route path='/Aboutus' element={<Aboutx/>}/>
        <Route path='/Photos' element={<Photos/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
