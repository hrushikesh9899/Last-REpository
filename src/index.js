import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import Middle from './components/Middle';
import Header from "./Header";
import Neew from './Netflix/Neew';
import Footer from './Netflix/Footer';


ReactDOM.render(
  <>
   <div className=" text-white bg-dark">
        
  <Header/>
  
  <Middle/>
  
  <App />
  
  <Neew/>

  <Footer/>

  </div>

  
  </>,
  document.querySelector("#root")
);



