import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import axios from 'axios';
import Home from './Pages/Home'
import CreateAppointment from './Pages/CreateAppointment'
import Header from './Components/Header'
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer'

function App() 
{
  const [formInput, setFormInput] = useState({
    patientName: '',
    email: '',
    phone: '',
    doctorName: '',
    date: '',
    time: ''
  });
  const [apptDate, setApptDate] = useState("");
  const [slots, setSlots] = useState([]);

  const { patientName, email, phone, doctorName, date, time } = formInput;

  const fetchSlots = async () =>
  {
    try
    {
      let resp = await axios.get(`http://localhost:5000/api/appointment/available?date=${apptDate}`);
      let data = await resp.data;
      console.log(data.availableSlots);
      setSlots(data.availableSlots);
      console.log(slots);
    }
    catch(err)
    {
      console.error(err);
    }
  }

  const getInput = (e) =>
  {
    setFormInput({ ...formInput, [e.target.name]: e.target.value});
    console.log(formInput);
  }

  const dateHandler = (e) =>
  {
    setApptDate(e.target.value);
    setFormInput({ ...formInput, [e.target.name]: e.target.value});
  }

  const getSlots = async (e) =>
  {
    e.preventDefault();
    fetchSlots()
  }

  const timeHandler = (e) =>
  {
    // console.log(e.target.value);
    setFormInput({ ...formInput, [e.target.name]: e.target.value});
  }

  const submitAppointment = async (e) =>
  {
    e.preventDefault();

    try
    {
      let resp = await axios.post(import.meta.env.VITE_BACKENDURL + 'api/appointment/newAppointment',
      {
        patientName, email, phone, doctorName, date, time
      });
      let data = resp.data;
      console.log(data)
      console.log("New appointment created");
    }
    catch(error)
    {
      console.error(error.response.data);
    }
  }

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
        {/* <CreateAppointment /> */}
        {/* <form onSubmit={submitAppointment}>
          <input 
            type="text"
            name="patientName"
            value={patientName}
            placeholder="Patient Name"
            onChange={getInput}
          />
          <input 
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={getInput}
          />
          <input 
            type="tel"
            name="phone"
            value={phone}
            placeholder="Phone"
            onChange={getInput}
          />
          <select name="doctorName" onChange={getInput}>
            <option value=""></option>
            <option value="Adam Clark">Adam Clark</option>
          </select>
          <input type="date" name="date" value={apptDate} onChange={dateHandler} />
          <button onClick={getSlots}>Check Slots</button>
          {slots ?
            <ul>
              {
                slots.map((slot, index) =>
                  <div key={index}>
                    <input type="radio" name="time" value={slot} onChange={timeHandler} />
                    <label htmlFor={slot}>{slot}</label>
                  </div>
                )}
            </ul>

            :

            <h3>No slots</h3>
          }
          <button type="submit">Submit</button>
        </form> */}
        
      </div>
    </>
  )
}

export default App
