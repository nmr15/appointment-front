import './DoctorCard.scss'

const DoctorCard = () =>
{
  return(
    <>
      <div className="docCard">
        <div className="docCard__img">
          <img src="https://placehold.co/230x230?text=Doctor" alt="doctor_image" />
        </div>
        <div className="docCard__content">
          <h3>Dr. Alex Carter</h3>
          <span>Internal Medicine</span>
        </div>
      </div>
    </>
  )
}

export default DoctorCard;