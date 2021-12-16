import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/style.scss';
import myImg from './assets/img/img1.jpg';


const App =()=>{
    return(
        <div>
        <h1>Hello</h1>

            <img src={myImg} width="300" alt="" />
        </div>
    )
}



ReactDOM.render(<App />,document.getElementById('root'));

