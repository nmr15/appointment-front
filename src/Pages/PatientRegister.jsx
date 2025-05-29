import { useState } from "react"
import axios from "axios"

const PatientRegister = () => 
{
  let [signUpObj, setSignUpObj] = useState({ name: '', password: '', email: '', phone: ''});

  let changeHandler = (e) =>
  {
    setSignUpObj({ ...signUpObj, [e.target.name]: e.target.value });
    console.log(signUpObj);
  }

  return (
    <>
      <div>
        <h2>Registration</h2>
        <form action="">
          <div>
            <input type="text" name="name" onChange={(e) => changeHandler(e)} id="name" placeholder="Name" />
          </div>
          <div>
            <input type="password" name="password" onChange={(e) => changeHandler(e)} id="password" placeholder="Password" />
          </div>
          <div>
            <input type="email" name="email" onChange={(e) => changeHandler(e)} id="email" placeholder="Email" />
          </div>
          <div>
            <input type="tel" name="phone" onChange={(e) => changeHandler(e)} id="phone" placeholder="Phone" />
          </div>

        </form>
      </div>
    </>
  )
}

export default PatientRegister