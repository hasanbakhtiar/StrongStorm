import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';




class App extends Component{
  render(){
    return(
     <BrowserRouter>
       <Nav />
       <Route exact path="/" component={Home}></Route>
       <Route path="/about" component={About}></Route>
       <Route path="/contact" component={Contact}></Route>
     </BrowserRouter> 
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))