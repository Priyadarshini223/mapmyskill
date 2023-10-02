import React,{useState,useEffect} from 'react'
import './App.css';
import Signout from './pages/Signout';
import Signin from './pages/Signin';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("umail"))
    setPassword(localStorage.getItem("upass"))
  }, []);
  return (
    <div>
    {
      email==="abc@gmail.com" && password==="abc123" ? <Signin/> :  <Signout/>
    }
    </div>
  );
}

export default App;
