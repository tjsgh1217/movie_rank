import React,{ useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {

  useEffect(() => {
    axios.get('/api/hello')
    .then(response => console.log(response.data))
  }, [])


  return (
    <div>
      <span className="a" >
       
      </span>
    </div>
  );
}

export default App;
