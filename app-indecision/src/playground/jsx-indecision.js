// import React from 'react';
// import ReactDOM from 'react-dom';
console.log("App.js is running..");
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//babel src/playground/stateless-Functional-Component.js --out-file=public/scripts/app.js --presets=env,react --watch
//JSX - JavaScript XML

const app={
  title :'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};


const onRemoveAll =() =>{
  app.options = [];
  renderCounterApp(); 
}

const onFormSubmit = (e) => {
e.preventDefault();

const option = e.target.elements.option.value;

if (option){
  app.options.push(option);
  e.target.elements.option.value = '';
  renderCounterApp();
}
};

const onMakeDecision =() =>{

  const randonNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randonNum];
  alert(option);
  console.log(randonNum);

};
const appRoot=document.getElementById('app');

// const numbers = [55 , 101, 1000];


  const renderCounterApp= () => {
    const templet =(
      <div> 
        <h1>This is my First React app!</h1>
        <p>Indecision App</p> 
        <p>{app.options.length > 0 ? 'Here are your option ' :'No option'}</p>
        {/* <p>{app.option.length}</p> */}
        <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
     
        <ol>
          {
            app.options.map((option) => <li key={option}>{option}</li>)
            
          }
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button> Add option</button>
        </form>
      </div>
    );  
    
    ReactDOM.render(templet,appRoot);
   
  }

renderCounterApp();