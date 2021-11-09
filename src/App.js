import React from 'react';
import Accueil from "./components/Accueil/Accueil";
import {NavLink,BrowserRouter,Route} from 'react-router-dom';
import Jap from "../src/components/Jap/index";
import Onrec from "../src/components/Onrec/App";
import Tinder from "../src/components/Tinder/index";
import ScrollToTop from './GoTop';
import Er from './components/404/App';
import Tesla from "./components/Tesla/App";

function App() {
  
return (


<BrowserRouter>
     <ScrollToTop>
      <Route exact  path="/" component={Accueil}></Route>
      <Route exact  path="/Jap" component={Jap}></Route>
      <Route exact  path="/Onrec" component={Onrec}></Route>
      <Route exact  path="/Tinder" component={Tinder}></Route> 
      <Route exact  path="/404" component={Er}></Route>
      <Route exact  path="/Tesla" component={Tesla}></Route>
      </ScrollToTop>
</BrowserRouter>



)}



export default App