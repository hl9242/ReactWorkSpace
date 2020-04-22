// const obj = {
//   name : 'vikaram',
//   getName() {
//     return this.name;

//   }
// };
// const getName = obj.getName.bind(obj);
// console.log(getName());

class IndecisionApp extends React.Component {
  render(){
    const title = "Indecision";
    const subtitle  = "Put your life in the hands of a computer";
    const options = ['Things one ','Things two ','Things four '];
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption  options={options}/>

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
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll=this.handleRemoveAll.bind(this)

  }
  handleRemoveAll(){
   // this.props.options =[];
    //alert('all content has been successfully removed!')
    console.log(this.props.options);
  }
  render(){
    return (
      <div>
        <button onClick={this.handleRemoveAll}>RemoveAll</button>
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
    handleAddOption(e){
      e.preventDefault();
    const option = e.target.elements.option.value.trim();

  if (option){
    alert(option);
  }
    }
    render(){
      return(
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button> Add option</button>
          </form>
        </div>
      );
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));