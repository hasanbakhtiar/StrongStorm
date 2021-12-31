class App extends React.Component{
      componentDidMount(){
        console.log('componentdidmount running...');
        
      }
      constructor(props){
          super(props);
          this.addCount = this.addCount.bind(this);
          console.log('constructor runing...');
          this.state ={
            count:0
          }
      }
    
      addCount(){
        this.setState({
          count: this.state.count+1
        })
      }
     
    
      componentDidUpdate(){
        console.log('update success');
        document.querySelector('h1').style.color="red";
        document.querySelector('p').innerHTML = "Hello";
      }
    
      // componentWillUnmount
    
      render(){
        return(
          <div className='container'>
            <h1>{this.state.count}</h1>
            <p></p>
            <button className='btn btn-primary' onClick={this.addCount}>+1</button>
          </div>
        )
      }
    }