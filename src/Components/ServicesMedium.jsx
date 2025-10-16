import "./ServicesMedium.scss";
import { FaBriefcaseMedical } from "react-icons/fa";

const ServicesMedium = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="col-4">
            <div className="serviceMd">
              <span className="serviceMd__icon">
                <FaBriefcaseMedical />
              </span>
              <h4>Lorem ipsum</h4>
              <p>
                Curabitur scelerisque metus tortor, at condimentum neque gravida
                et.
              </p>
              <ul className="serviceMd__list">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesMedium;
