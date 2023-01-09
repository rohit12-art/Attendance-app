import React, { useState } from 'react'

const DashBoard = ({ setCount, setRegister }) => {
    const[regNo,setRegNo] = useState('');
    const[name,setName]=useState('')

    function handleCheckin(e) {
        if (regNo === "" || name === "") {
          return;
        }
    
        e.preventDefault();
    
        setRegister((prev) => {
          const record = prev.findIndex((rec) => {
            return rec.registrationNumber === regNo && rec.checkoutTime === null;
          });
    
          if (record === -1) {
            prev.push({
              studentName: name,
              registrationNumber: regNo,
              checkinTime: new Date(),
              checkoutTime: null,
            });
            alert("Student checked in!");
            setCount((prev) => prev + 1);
            return prev;
          } else {
            alert("Student already checked in!");
            return prev;
          }
        });
    
        setRegNo("");
        setName("");
      }

      function handleCheckout(e) {
        if (regNo === "" || name === "") {
          return;
        }
    
        e.preventDefault();
    
        setRegister((prev) => {
          const record = prev.findIndex((rec) => {
            return rec.registrationNumber === regNo;
          });
    
          if (record !== -1) {
            prev[record].checkoutTime = new Date();
            alert("Student checked out!");
            setCount((prev) => prev - 1);
            return prev;
          } else {
            alert("Student record doesn't exist!");
            return prev;
          }
        });
    
        setRegNo("");
        setName("");
      }
    
  return (
    <div className='InputStudent'>
       <h2>Input Student Details</h2>
      <form>
        <input
          type="text"
          placeholder="Registration no."
          onChange={(e) => setRegNo(e.target.value)}
          value={regNo}
          required
        />
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <br />
        <button onClick={handleCheckin}>Checkin</button>
        <button onClick={handleCheckout}>Checkout</button>
      </form>
    </div>
  )
}

export default DashBoard
