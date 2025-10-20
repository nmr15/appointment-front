import ServicesMedium from './ServicesMedium'
import { FaXRay } from "react-icons/fa";
import { GiBarefoot, GiMedicinePills } from "react-icons/gi";

const services = [
  {id: "1", icon: <FaXRay className="icon" />, title: "Radiology", desc: "Lorem ipsum", list: ["X-ray", "CT scan", "PET scan", "MRI", "Ultrasound", "Mammogram"]},
  {id: "2", icon: <GiBarefoot />, title: "Rehabilitation", desc: "Lorem ipsum", list: ["Physical Therapy", "Occupation Therapy", "Speech Therapy", "Aquatic Therapy", "Wound Care", "Pediatric Rehabilitation"]},
  {id: "3", icon: <GiMedicinePills />, title: "Cancer Treatment", desc: "Lorem ipsum", list: ["Chemotherapy", "Radiation Therapy", "Cancer Surgery", "Hormone Therapy", "Immunotherapy", "Targeted Therapy"]}
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