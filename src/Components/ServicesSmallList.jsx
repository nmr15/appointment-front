import './ServicesSmall.scss'
import './ServicesSmall'
import { FaUserNurse, FaSyringe } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const services = [
  {id: "1", icon: "<FaUserNurse />", title: "Lab Services", desc: "Fast, accurate diagnostic testing to support timely and effective medical care."},
  {id: "2", icon: "<FaUserDoctor />", title: "Medical Professionals", desc: "Our experienced medical professionals provide compassionate, expert care to support your health and well-being."},
  {id: "3", icon: "<FaSyringe />", title: "Immunizations", desc: "Trusted immunization services to keep you and your family protected, healthy, and up to date."}
];

const ServicesSmallList = () =>
{
  return(
    <>
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div className="col-4" key={service.id}>
              <ServicesSmall icon={service.icon} title={service.title} desc={service.desc}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ServicesSmallList