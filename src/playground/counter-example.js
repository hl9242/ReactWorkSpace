const tempVariable={
    'name' : '',
    'age' : 28,
    'location' : ''
    };
    
    function myFun(location){
      if(location){
        return <p>Location :{location}</p>;
      }
    
    }
    const myTemplet =(
      <div>
        <h1>{ tempVariable.name ? tempVariable.name : 'Anonymous'}</h1>
        <p>Age :{tempVariable.age}</p>
        {myFun(tempVariable.location)}
        
      </div>
    );
    let count=0;
    const addOne = () => {
      count++;
      renderCounterApp();
    console.log('addOne',count);
    };
    
    const minusOne = () => {
      if(count != 0){
      count--;
      renderCounterApp();
      console.log('minusOne',count);
      }
      };
    
      const reset = () => {
        count=0;
        renderCounterApp();
        console.log('reset :');
        };
    
    const appRoot=document.getElementById('app');
    const myId=document.getElementById('myDiv');
    
    //ReactDOM.render(myTemplet,myId);
    
    const renderCounterApp= () => {
      const myTempletTwo =(
        <div>
          <h1> Count: {count}</h1>
          <button onClick={(addOne)}>+1</button>
          <button onClick={(minusOne)}>-1</button>
          <button onClick={(reset)}>reset</button>
        </div>
      );
      ReactDOM.render(myTempletTwo,appRoot);
    };
    
    renderCounterApp();