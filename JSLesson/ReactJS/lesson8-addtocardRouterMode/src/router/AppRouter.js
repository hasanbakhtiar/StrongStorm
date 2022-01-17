import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Header from '../components/Header';
import Products from '../components/Products';
import Card from '../components/Card';
import NotFound from '../components/NotFound';
import Blogs from '../components/Blogs/Blogs';
import BlogItem from '../components/Blogs/BlogItem';


const AppRouter = () => {
    return (
        <BrowserRouter>
        <CartProvider>
      
        <Header />

        <Switch>
            <Route path="/" exact component={Products}></Route>
            <Route exact path="/blogs" component={Blogs}></Route>
            <Route path="/blogs/:id" component={BlogItem}></Route>
            <Route path="/card" component={Card}></Route>
            <Route component={NotFound}></Route>
        </Switch>


        </CartProvider>
            
        </BrowserRouter>
    )
}

export default AppRouter
