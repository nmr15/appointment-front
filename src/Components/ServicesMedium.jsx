import "./ServicesMedium.scss";
import { FaBriefcaseMedical } from "react-icons/fa";

const ServicesMedium = ({ icon, title, desc, list }) => {
  return (
    <>
      <div className="serviceMd">
        <span className="serviceMd__icon">
          {icon}
        </span>
        <h4>{title}</h4>
        <p>{desc}</p>
        <ul className="serviceMd__list">
          {list.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ServicesMedium;
