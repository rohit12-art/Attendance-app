import React, { useState } from 'react';
import './App.css';
import Check from './components/Check';
import DashBoard from './components/DashBoard';

function App() {
  const[register,setRegister] = useState([]);
  const[count,setCount]=useState(0);
  return (
    <div className="App">
      <h1>Student Attendance</h1>
      <DashBoard setRegister={setRegister} setCount={setCount} />
      <Check count={count} registe={register} />
    </div>
  );
}

export default App;
