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
        <AddOption />

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
  render(){
    return(
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>
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
  render(){
    return(
      <div>
        AddOption component here!
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));