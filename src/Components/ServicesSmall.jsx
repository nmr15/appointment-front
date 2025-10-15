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
    </>
  )
}

export default ServicesSmall