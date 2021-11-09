// == Import npm
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

import book from './Blinguage/book.png';
import headset from './Blinguage/headset.png';
import loop from './Blinguage/loop.png';

import Footer from "../Footer/Footer";

// == Import
import './styles.scss';

// == Composant
const Jap = () => (
  <div className="app">

    <div className="row ">

        <div className="col-6 align-self-start ps-7">
          <div className="p-4 ps-5">
            <h3 className="Blinguage"><strong>Blinguage</strong></h3>
          </div>
        </div>


        <div className="col-6 ">
          <div className=" p-4 ps-6 ">
          
          <Navbar >
            <Container>
            <Nav className="me-auto ">
              <NavDropdown title="Courses" id="basic-nav-dropdown" className="ps-5" >
                <NavDropdown.Item href="#action/3.1">Kanji</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Kana</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features"className="ps-5" ><strong>Why us</strong></Nav.Link>
              <Nav.Link href="#pricing"className="ps-5 pe-5" ><strong>Support</strong></Nav.Link>
              <Button variant="outline-primary" className="" ><strong>Get Started</strong></Button>{' '}
            </Nav>
            </Container>
          </Navbar>
   
          </div>
        </div>


    </div>


    <div className="row">
      <div className="col-5 align-self-start ps-7 mt-7 mb-6">
        <div className=" p-4 ps-5">

          <h1 className="jap" ><strong>Learn <br/> Japanese </strong></h1>
          <p className="mt-5 mb-5">Visiting the temple in kyoto, getting a new job, or making a personal connection no mather why you whant to learn we have the right Courses for you</p>
          <Button>Get Started</Button>

        </div>
      </div>

    </div>

    <div className="row mt-3 ms-7">

  <div className="col-3">
    <div className="p-4">
      <img src={book} alt=""/>
      <p><br/><strong>Detail lesson</strong> packed with Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>

  <div className="col-3">
    <div className="p-4">
    <img src={headset} alt=""/>
    <p > <br/> <strong>Engaging audio</strong> packed with Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    </div>
  

  <div className="col-3">
    <div className="p-4">
    <img src={loop} alt=""/>
    <p ><br/><strong>Flexible subscription</strong> packed with Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
    

  </div>




  <Footer></Footer>
  </div>


  
);

// == Export
export default Jap ;
