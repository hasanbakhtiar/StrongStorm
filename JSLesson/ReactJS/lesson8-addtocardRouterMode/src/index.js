import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from 'react-use-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Card from './components/Card';
import Header from './components/Header';
import Products from './components/Products';


const App =()=>{
    return(
        <div>
            <Header />  
        <CartProvider>
            <Products/>
            <Card />
        </CartProvider>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));