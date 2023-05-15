// const obj = {
//   name : 'vikaram',
//   getName() {
//     return this.name;

//   }
// };
// const getName = obj.getName.bind(obj);
// console.log(getName());

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.state = {
      //options : ['Things one ','Things two ','Things four ' ]
      options : []
    };
  }
  componentDidMount()  {
    console.log("componentdidMaount!")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate! ");
  }
  handleDeleteOptions() {
    this.setState(() => { 
      return {
        options : []
      };
    });
  }
  handlePick(){
    //const randonNum = Math.floor(Math.random() * app.options.length);
    const temp= Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[temp]);
    
  }
  handleAddOption(option){
    if(!option){
      return 'Enter Valid value to add item'
    }else if(this.state.options.indexOf(option) > -1){
      return 'This item already exists';
    }
    this.setState((prevState) => {
      return {
        options:prevState.options.concat(option)
      };

    });
  }
  render(){
    const title = "Indecision";
    const subtitle  = "Put your life in the hands of a computer";
    //const options = ['Things one ','Things two ','Things four '];
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption  handleAddOption={this.handleAddOption}/>

      </div>
    );
  }
}
class Header extends React.Component {

  render(){
    
    return <div>
      <h1>{this.props.title}</h1>
  <h2>{this.props.subtitle}</h2>
    </div>;
  }
}

class Action extends React.Component {
  handlePick(){
    alert('handlePick click');
  }
  render(){
    return(
      <div>
        <button onClick={this.props.handlePick}
        disabled = {!this.props.hasOptions}
        >What should I do?
        
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll=this.handleRemoveAll.bind(this)

  // }
  // handleRemoveAll(){
  //  // this.props.options =[];
  //   //alert('all content has been successfully removed!')
  //   console.log(this.props.options);
  // }
  render(){
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
        {this.props.options.length}
        {/* {this.props.options.map((option) => <p key={option}>{option}</p>)}  */}
        {this.props.options.map((option) => <Option key={option} optionText={option}/>)} 
        <Option/>
      </div>
    );
  }
}
class Option extends React.Component{
  render(){
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}
class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.state = {
      error : undefined
    }
  }
    handleAddOption(e){
      e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error =this.props.handleAddOption(option);;
    this.setState(() => {
      return { error };
    });

    
  // if (option){
  //   this.props.handleAddOption(option); 
  // }
    }
    render(){
      return(
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button> Add option</button>
          </form>
        </div>
      );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app '));