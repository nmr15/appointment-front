import './ServicesSmall.scss'
import { FaUserNurse, FaSyringe } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const ServicesSmall = ({ icon, title, desc }) => 
{
  return (
    <>
      <div className="serviceSm">
        <span className="serviceSm__icon">
          {icon}
        </span>
        <h4 className="serviceSm__title">{title}</h4>
        <p className="serviceSm__desc">{desc}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="serviceSm">
              <span className="serviceSm__icon">
                <FaUserNurse />
              </span>
              <h4 className="serviceSm__title">Lab Services</h4>
              <p className="serviceSm__desc">Fast, accurate diagnostic testing to support timely and effective medical care.</p>
            </div>
          </div>
          <div className="col-4">
            <div className="serviceSm">
              <span className="serviceSm__icon">
                <FaUserDoctor />
              </span>
              <h4 className="serviceSm__title">Medical Professionals</h4>
              <p className="serviceSm__desc">Our experienced medical professionals provide compassionate, expert care to support your health and well-being.</p>
            </div>
          </div>
          <div className="col-4">
            <span className="serviceSm__icon">
              <FaSyringe />
            </span>
            <h4 className="serviceSm__title">Immunizations</h4>
            <p className="serviceSm__desc">Trusted immunization services to keep you and your family protected, healthy, and up to date.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesSmall