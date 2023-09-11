import React from "react";
import { ReactDOM } from "react";
import Auth from './fin/Auth';
import Footer  from'./fin/Footer';
import Inscrit from './fin/Inscrit';
import Uniter1 from "./fin/Uniter1";
import Uniter4 from "./fin/Uniter4";

import Uniter3 from "./fin/Uniter3";
import Uniter5 from "./fin/Uniter5";
import Uniter2 from "./fin/Uniter2";
import Tks from "./fin/Tks";
import RejetHydrique from "./fin/RejetHydrique"

import Suivant from "./fin/Suivant";
import Suivant1 from "./fin/Suivant1";

import './style.css'
import { Routes, Route} from 'react-router-dom';
function App() {
 return (
   <div className="page-container"> 
   <div className="content-warp"></div>
    <Routes> 
      <Route path='/' element ={<Auth/>} ></Route>
       < Route path='/Uniter1' element={<Uniter1/>} />
      < Route path='/Uniter2' element={<Uniter2/>} />
      < Route path='/Uniter3' element={<Uniter3/>} />
      < Route path='/Uniter4' element={<Uniter4/>} />
      < Route path='/Uniter5' element={<Uniter5/>} />
      < Route path='/Inscrit' element={<Inscrit/>} />
      < Route path='/Suivant'element={<Suivant/>} />
      < Route path='/Suivant1'element={<Suivant1/>} />
      < Route path='/Tks'element={<Tks/>} />
      < Route path='/RejetHydrique'element={<RejetHydrique/>} />
      </Routes>
      <Footer/>
   </div>
 )
}


export default App;




































/*
import Home from './hookes/Home';
import Footer from './hookes/Footer';

import Navbar from './hookes/Navbar';
import Concter from './hookes/Concter';
import Uniter1 from './hookes/Uniter1';



  import { Routes,Route } from 'react-router-dom'
 function App() {
  return (
    <div>
      <Navbar/>
      <Routes> 
        <Route path="/" exact   element={<Home/>} />
      <Route path="/Concter" element={<Concter/>} />
      
      <Route path="/uniter1" element={<Uniter1/>} />
         </Routes>
    <Footer/>
    </div>
  )
}
export default App;*/
