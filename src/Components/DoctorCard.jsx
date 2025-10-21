import './DoctorCard.scss'

const DoctorCard = () =>
{
  return(
    <>
        <div className="row">
            <div className="col-3">
                <div className="docCard">
                    <div className="docCard__img">
                        <img src="https://placehold.co/200x200?text=Doctor" alt="doctor_image" />
                    </div>
                    <div className="docCard__content">
                        <h3>Dr. Alex Carter</h3>
                        <span>Internal Medicine</span>
                    </div>
                </div>
                <div className="docCard">
                    <div className="docCard__img">
                        <img src="https://placehold.co/200x200?text=Doctor" alt="doctor_image" />
                    </div>
                    <div className="docCard__content">
                        <h3>Dr. Alex Carter</h3>
                        <span>Internal Medicine</span>
                    </div>
                </div>
                <div className="docCard">
                    <div className="docCard__img">
                        <img src="https://placehold.co/200x200?text=Doctor" alt="doctor_image" />
                    </div>
                    <div className="docCard__content">
                        <h3>Dr. Alex Carter</h3>
                        <span>Internal Medicine</span>
                    </div>
                </div>
                <div className="docCard">
                    <div className="docCard__img">
                        <img src="https://placehold.co/200x200?text=Doctor" alt="doctor_image" />
                    </div>
                    <div className="docCard__content">
                        <h3>Dr. Alex Carter</h3>
                        <span>Internal Medicine</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DoctorCard;