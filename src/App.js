import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [modeMsg, setModeMsg] = useState("Enable Dark Mode");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor = "#042742";
      document.body.style.color = "aliceblue";
      setModeMsg("Disable Dark Mode");
      showAlert("Dark Mode is Enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "aliceblue";
      document.body.style.color = "#042742";
      setModeMsg("Enable Dark Mode");
      showAlert("Dark Mode is Disabled", "success");
    }
  }

  return(
    <>
    <Navbar title = "Textutils" aboutName ="About" mode={mode} toggleMode={toggleMode} msg={modeMsg}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      
      <FormText heading = "Enter your Text here" mode={mode} showAlert={showAlert}/>
      <About/>
    </div>
    </>
  );
}

export default App;
