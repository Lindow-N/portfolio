// == Import npm
import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "../Footer/Footer";


class Tinder extends React.Component {

  render() {
    return (

<Fragment>

<header class="bg-danger sticky-top p-3 text-md-start">
  <div className="ms-5 me-5" >
  <img className="img-fluid   " src="https://believemy.com/uploads/6763a04395459d7d6927b063bda86d64_d1161538dec5596c16877d9a83085a8b.png"  />
  </div>
</header>


<section className="text-center pt-5 ps-4 pe-4">
  <h1 className="fw-bold ">Numéro <b className="text-danger" >1</b> des<br/>rencontres</h1>
  <img className="img-fluid" src="https://believemy.com/uploads/9d68712374e3b4d98b40c9680ce71df1_0cbd495042b88ce8c3c3ac834da275a7.png" />
</section>


<section>
  <h2 className="text-center pt-5">Déjà <b className="text-success">20</b> millions de matchs !</h2>
  
  <div className="container mt-4 mb-4 ratio ratio-16x9">
    <iframe className="ps-2 pe-2" src="https://www.youtube.com/embed/zdef2anpd04" allowFullScreen></iframe>
  </div>
</section>


<footer className="bg-danger sticky-bop p-3 " >
  <div className="text-white text-end pe-5">
    © Tinder
  </div>
</footer>

<Footer></Footer>

</Fragment>


    ) 
  }
}

// == Export
export default Tinder;
