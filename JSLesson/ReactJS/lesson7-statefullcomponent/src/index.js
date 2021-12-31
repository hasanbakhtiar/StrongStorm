import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';



const App=(props)=>{
  useEffect(() => {
   console.log('useEffect running...');
  },[])


  const [count, setstate] = useState(props.count);
  const addCount=()=>{
    setstate(count+1)
  }
  return(
    <div className='container'>
      <h1>U clicked {count}</h1>
      <button className="btn btn-primary" onClick={addCount}>+1</button>
    </div>
  )
}

App.defaultProps={
  count :0
}





ReactDOM.render(<App />, document.querySelector('#root'))