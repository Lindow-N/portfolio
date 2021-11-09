import logo from './img/Scarecrow.png'; 
import './index.css';
import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';
import {NavLink} from 'react-router-dom';
class Er extends React.Component {

  render() {
    return (
<Fragment>
  <div className="App">
  
 
    <h2 id="Eh2">404 NOT FOUND</h2>
 
  
  
    <img src={logo}   id="Eimg"/>

    <h1 id="Eh1">I have bad news for you</h1>

    <p id="Ep">The page you are looking for might be removed or is temporarily unavailable</p>

    <NavLink to="/" exact  ><button   id="Ebtn">Back to homepage</button></NavLink>

    
  <footer  id="Efooter">
    <h3 id="Eh3">created by Lindow (Anthony Casares) - devChallenges.io</h3>
  </footer>

  </div>

  </Fragment>
  );
}
}
export default Er;

