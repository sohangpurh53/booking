import React, { useState } from 'react';
import './style.css'
const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [pnrNo, setPnrNo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      First_name: firstName,
      Last_name: lastName,
      Email: email,
      Mobile_no: mobileNo,
      Pnr_no: pnrNo,
      Date: date
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/book/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="mobileNo">Mobile Number</label>
          <input type="text" id="mobileNo" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
        </div>
        <div>
          <label htmlFor="pnrNo">PNR Number</label>
          <input type="text" id="pnrNo" value={pnrNo} onChange={(e) => setPnrNo(e.target.value)} />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
