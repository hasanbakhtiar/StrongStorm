import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from 'react-use-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Card from './components/Card';
import Products from './components/Products';


const App =()=>{
    return(
        <CartProvider>
            <Products/>
            <Card />
        </CartProvider>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));