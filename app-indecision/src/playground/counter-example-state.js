class Counter extends React.Component {
  constructor(props){
    super(props);
  this.handleAdddOne=this.handleAdddOne.bind(this);   
  this.handleMinusOne=this.handleMinusOne.bind(this);   
  this.handleRest=this.handleRest.bind(this);   
  this.state = {
    count : 0
  };
  }
    
  handleAdddOne(){
    this.setState((prevState) => {
    return{
      count: prevState.count + 1
    }
    });
  }
  handleMinusOne(){
    this.setState((prevState) => {
      return{
        count: prevState.count - 1
      }
      });
    
  }
  handleRest(){
    this.setState(() => {
      return{
        count: 0
      }
      });
      this.setState((prevState) => {
        return{
          count: prevState.count + 1
        }
        });
  //  this.setState({
  //    count : 0
  //  });

  //  this.setState({
  //   count : this.state.count + 1
  // });
  }
  render() {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleRest}>reset</button>
      </div>
    );
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));