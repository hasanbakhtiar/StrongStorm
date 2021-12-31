// StateFull Component
const App =(props)=>{

    const [count, setCount] = useState(props.count)
  
    return(
      <div>
        <h1>U cliked <span>{count}</span></h1>
        <button onClick={()=>{setCount(count-1)}} className="btn btn-danger">-1</button>
        <button onClick={()=>{setCount(count+1)}} className="btn btn-success">+1</button>
      </div>
    )
  }
  
  App.defaultProps={
    count: 0
  }