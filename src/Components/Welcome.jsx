import './Welcome.scss'

const Welcome = () => 
{
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="welcome">
                <h2>Welcome to our Clinic</h2>
                <div className="welcome__intro">
                  <p>
                    Vivamus imperdiet, turpis eu tincidunt interdum, justo diam iaculis est,
                    vel faucibus mi felis nec urna. Aliquam efficitur blandit felis in
                    vehicula. Quisque pretium metus dolor, et vulputate orci pretium non.
                    Fusce et interdum erat, vitae semper magna. Mauris in elementum urna,
                    ut lobortis urna. 
                  </p>
                  <p>
                    Integer eget turpis pulvinar, luctus magna sed, euismod lacus. Fusce porttitor,
                    risus vel commodo lobortis, lacus ex lobortis ligula, pharetra
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="welcome__img">
                <h5>Welcome Image</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Welcome