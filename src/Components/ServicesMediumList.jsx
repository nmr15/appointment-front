import ServicesMedium from './ServicesMedium'
import { FaXRay } from "react-icons/fa";

const services = [
  {id: "1", icon: <FaXRay className="icon" />, title: "Radiology", desc: "Lorem ipsum", list: ["X-ray", "CT scan", "PET scan", "MRI", "Ultrasound", "Mammogram"]}
]

const ServicesMediumList = () => 
  {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {services.map((service) =>
            (
              <div className="col-4" key={service.id}>
                <ServicesMedium icon={service.icon} title={service.title} desc={service.desc} list={service.list} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesMediumList