import React from 'react';
import styles from "./App.module.css";
import {NavLink} from 'react-router-dom';

import jap from "./imgApp/localhost_8080_ (13) (1).png";
import onrec from "./imgApp/Capture (1).PNG";
import tinder from "./imgApp/Capture (2).PNG";
import er from "./imgApp/ddddddd.PNG";
import tesla from "./imgApp/dddddddsss).PNG";

class Accueil extends React.Component {
 render() {
return (
  <>
<div id={styles.headerApp}>
  <h1 id={styles.h1App}>Portfolio</h1>
</div>

<div id={styles.bodyApp}>

  

  <div  className={styles.cardApp}>

    <img id={styles.onrec} src={onrec}alt=""/>
    <div className={styles.cardApp2}>
    <h2 className={styles.h2App}>OnRec - Site studio d'enregistrement</h2>
    <p className={styles.pApp}>Site web réalisé pour un studio d'enregistrement à Millau.
Le site n'est pas encore fini, mais il est complet et regroupe plusieurs pages intéressantes pour montrer mes capacités.</p>
   
   

  </div>
  <div className={styles.cardApp3}><NavLink to="/Onrec" exact ><button className={styles.btnApp}>Voir Plus</button></NavLink></div>
  </div>





<div  className={styles.cardApp}>

<img id={styles.onrec} src={tinder}alt=""/>
<div className={styles.cardApp2}>
<h2 className={styles.h2App}>Clone du site tinder Bootsrap</h2>
<p className={styles.pApp}>Durant mon apprentissage de bootstrap j'ai réalisé une copie du Site Tinder. 
Projet très simple mais montre mes connaissances si besoin d'utiliser bootstrap. </p>

</div>
<div className={styles.cardApp3}><NavLink to="/Tinder" exact ><button className={styles.btnApp}>Voir Plus</button></NavLink></div>
</div>

<div  className={styles.cardApp}>

<img id={styles.onrec} src={er}alt=""/>
<div className={styles.cardApp2}>
<h2 className={styles.h2App}>Page 404 - challenge.io</h2>
<p className={styles.pApp}>L'un des  challenges  du site des challenge.io que j'ai réalisé.</p>



</div>
<div className={styles.cardApp3}><NavLink to="/404" exact ><button className={styles.btnApp}>Voir Plus</button></NavLink></div>
</div>



<div  className={styles.cardApp}>

<img id={styles.onrec} src={tesla}alt=""/>
<div className={styles.cardApp2}>
<h2 className={styles.h2App}>Clone du site tesla Bootsrap</h2>
<p className={styles.pApp}>Durant mon apprentissage de bootstrap j'ai réalisé une copie du Site Tesla. 
Projet très simple mais montre mes connaissances si besoin d'utiliser bootstrap.</p>



</div>
<div className={styles.cardApp3}><NavLink to="/Tesla" exact ><button className={styles.btnApp}>Voir Plus</button></NavLink></div>
</div>
</div>



  </>
)}
}


export default Accueil