import React,{useState} from 'react';
import './App.css';


function App() {
  const [disabled , setDisabled] = useState(true)
  return (
    <div className="App">
      <button className={`${disabled ? "red" : "blue"} `} 
      onClick={() => {
        if(disabled){
          // console.log("clicked")
          setDisabled(false)
        }
        else{
          setDisabled(true)
        }
      }} >Click me !</button>
    </div>
  );
}

export default App;
