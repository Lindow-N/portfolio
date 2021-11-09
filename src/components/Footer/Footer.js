import React from 'react';
import styles from "./Footer.module.css";
import {NavLink} from 'react-router-dom';


class Footer extends React.Component {
 render() {
return (
  <>

<div id={styles.Footer}>
  <NavLink to="/" exact  ><h1 id={styles.Footerh1}>Retour au menu</h1></NavLink>
</div>


  </>
)}
}


export default Footer