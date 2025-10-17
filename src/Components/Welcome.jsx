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
                <h5>Welcome</h5>
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