import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import BlogList from '../components/BlogList';
import Header from '../components/Header';
import Home from '../components/HomePage';
import AppBlogPage from '../components/AppBlogPage';
import Contact from '../components/Contact';

const AppRouter = () => {
  return <BrowserRouter>
  <Header />
 <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route  path="/blogs" component={BlogList}></Route>
        <Route  path="/create" component={AppBlogPage}></Route>
        <Route  path="/contact" component={Contact}></Route>
 </Switch>
  </BrowserRouter>;
};

export default AppRouter;
