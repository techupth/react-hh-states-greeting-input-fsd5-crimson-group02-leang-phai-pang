import { useState } from "react";
import "./App.css";

function App() {
  const [greetingTextInput,setGreetingTextInput]=useState("");
  const [greetingText, setGreetingText] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input 
        id="greeting-message" 
        type="text"
        onChange={(event)=>{
          setGreetingTextInput(event.target.value)
        }}
        value={greetingTextInput} />
      </div>

      <div className="buttons">
        <button
        onClick={()=>{
          setGreetingText(greetingTextInput);
          setGreetingTextInput("");
        }}>Update text</button>
      </div>
    </div>
  );
}

export default App;
