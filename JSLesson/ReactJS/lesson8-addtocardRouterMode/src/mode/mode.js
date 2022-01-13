import ReactDOM from 'react-dom';
import React,{ Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css';


// class Mode extends Component{
//     constructor(props){
//         super(props);
//         // this.dark = this.dark.bind(this);
//         // this.light = this.light.bind(this);
//         this.state={
//             mode: "box"
//         }
//     }
//     dark(){
//         this.setState({
//             mode: 'box dark'
//         })
//     }
//     render(){
//         return(
//             <div className="container">
//             <div className={this.state.mode}></div>
//             <div className='mt-3'>
//                 <button className='btn btn-light border me-3'>light</button>
//                 <button onClick={} className='btn btn-dark border '>dark</button>
//             </div>
//             </div>
//         )
//     }
// }



















class App extends Component{
    constructor(props){
        super(props);
        this.dark = this.dark.bind(this);
        this.light = this.light.bind(this);
        this.state={
            mode: "navbar navbar-expand-lg navbar-light bg-light"
        }
    }
    dark(){
        this.setState({
            mode: "navbar navbar-expand-lg navbar-dark bg-dark"
        })
    }
    light(){
        this.setState({
            mode: "navbar navbar-expand-lg navbar-light bg-light"
        })
    }
render(){
    return(
        
      <nav className={this.state.mode}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div className="d-flex">
            <button onClick={this.light} className="btn btn-outline-success me-3">light</button>
            <button onClick={this.dark} className="btn btn-outline-success">dark</button>
          </div>
        </div>
      </div>
    </nav>
    )
}
}


ReactDOM.render(<App/>,document.querySelector('#root'));