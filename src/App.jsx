import "./App.css";
import {useState} from 'react'

 //state มี 2 อัน 
 // 1.greetingInputMessage (change)
 // 2.greetingMessage (onClick)
function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [greetingInputMessage, setgreetingInputMessage] = useState("")
  
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" onChange={(event) => {
          setgreetingInputMessage(event.target.value)
        }}
          value={greetingInputMessage} />
      </div>

      <div className="buttons">
        <button onClick={ () => {
            setGreetingMessage(greetingInputMessage)
        }}>Update text</button>
      </div>
    </div>
  );
}

export default App;
