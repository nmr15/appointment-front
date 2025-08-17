import { useState, useEffect } from "react"

const AppointmentAdd = () => 
{
  const [appt, setAppt] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    time: '',
    patient: '',
    doctor: '',
  });

  const [doc, setDoc] = useState([]);
  const [schedule, setSchedule] = useState([]);

  return (
    <>
      
    </>
  )
}

export default AppointmentAdd