import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


// Redux Start

const intialState = {
  count : 0
}

const baza = createStore((deyer = intialState, hadise)=>{
      switch (hadise.type) {

        case "ARTIR": 
          return{
            count: deyer.count +1
          }

          case "BESARTIR": 
          return{
            count: deyer.count +5
          }

          case "AZALT": 
          return{
            count: deyer.count -1
          }

          case "SIFIRLA": 
          return{
            count: 0
          }
      
        default:
          return deyer
      }
})

baza.subscribe(()=>{
  
  console.log(baza.getState());
})

baza.dispatch({
  type : "BESARTIR"
})

baza.dispatch({
  type : "ARTIR"
})






// Redux End

const App=()=>{return(<h1>Hello</h1>)};
ReactDOM.render(<App />, document.querySelector('#root'));