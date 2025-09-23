import { useState, useEffect } from "react"
import axios from "axios"

const CreateAppointment = () => 
{
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');
  const [slots, setSlots] = useState([]);
  const [time, setTime] = useState('');
  const [patient, setPatient] = useState({ name: "", email: "", phone: "" });

  useEffect(() =>
  {
    console.log("in useEffect");

    const fetchDoctors = async () =>
    {
      let resp = await axios.get(import.meta.env.VITE_BACKENDURL + 'api/doctor/doctors');
      let data = await resp.data;
      console.log("Data");
      console.log(data);
      setDoctors(data);
      console.log("Doctors");
      console.log(doctors);
    }

    fetchDoctors();
    
  }, []);

  const fetchSlots = async (e) =>
  {
    e.preventDefault();
    // if(!doctorId || !date) return;

    try
    {
      let resp = await axios.get(import.meta.env.VITE_BACKENDURL + `api/appointment/available?doctorId=${doctorId}&date=${date}`);
      let data = await resp.data;
      console.log(data[0].availableSlots);
      setSlots(data[0].availableSlots);
      console.log(slots);
    }
    catch(err)
    {
      console.error(err);
    }
  }

  

  const doctorHandler = (e) =>
  {
    setDoctorId(e.target.value);
    console.log(doctorId);
  }

  const dateHandler = (e) =>
  {
    setDate(e.target.value);
    console.log(date);
  }

  const timeHandler = (e) =>
  {
    setTime(e.target.value);
    console.log(time);
  }

  return (
    <>
      <div>
        <h1>Create Appointment</h1>
        <form>
          <select name="doctorId" onChange={doctorHandler} >
            <option value=""></option>
            {doctors.map((doctor) => (
              <option value={doctor._id} key={doctor._id}>{doctor.name}</option>
            ))}
          </select>
          <input 
            type="date" 
            name="date" 
            value={date}
            onChange={dateHandler}
          />
          <button onClick={fetchSlots}>Check Slots</button>

          {slots ?
            <ul>
              {
                slots.map((slot, index) =>
                  <div key={index}>
                    <input type="radio" name="time" value={slot} onClick={timeHandler} />
                    <label htmlFor={slot}>{slot}</label>
                  </div>
                )}
            </ul>

            :

            <h3>No slots</h3>
          }
        </form>
      </div>
    </>
  )
}

export default CreateAppointment