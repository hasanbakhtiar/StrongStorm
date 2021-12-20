import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg'

// class Counter extends Component{

//   constructor(props){
//     super(props);
//     this.addCount = this.addCount.bind(this);
//     this.clearCount = this.clearCount.bind(this);
//     this.state={
//       count : 0
//     }
//   }

//   addCount(){
//       this.setState({
//         count: this.state.count +1
//       })
//   }

//   clearCount(){
//     if (this.state.count > 0) {
//       this.setState({
//         count: this.state.count -1
//       })
//     }
//   }
//  render(){
//   return(
//     <div className='container'>
//         <h1>U clicked {this.state.count}</h1>
//         <button onClick={this.clearCount} className="btn btn-danger button">-1</button>
//         <button onClick={this.addCount} className="btn ms-3 btn-success button">+1</button>

//     </div>
//   )
//  }
// }


class Book extends Component{
    constructor(props){
      super(props);
      this.nextBook = this.nextBook.bind(this);
      this.state={
        img:img1,
        name:"1984",
        author: "George Orwell",
        pageLenght: 500
      }
    }
  nextBook(){
    this.setState({
      img: img2,
      name:"Cinayet ve Ceza",
      author:"Dostoyevski",
      pageLenght: 400
  
    })
  }
  
    render(){
      return(
  <div className='container'>
    <img width="200" src={this.state.img} alt="" />
    <h1>{this.state.name}</h1>
    <p>{this.state.author}</p>
    <p>{this.state.pageLenght}</p>
    <p></p>
    <button onClick={this.nextBook} className="btn btn-primary">Next Book</button>
  </div>
  
      )
    }
  }
  
  // class App extends React.Component {
  //   state = { count: 0 };
  
  //   componentDidMount() {
  //     const intervalId = setInterval(() => {
  //       this.setState(prevState => {
  //         return {
  //           count: prevState.count + 1,
  //         };
  //       });
  //     }, 1000);
  //   }
  
  //   componentWillUnmount(){
  //     clearInterval(intervalId);
  //   }
  
  //   render() {
  //     return (
  //       <h1>The component has been rendered for {this.state.count} seconds</h1>
  //     );
  //   }
  // }