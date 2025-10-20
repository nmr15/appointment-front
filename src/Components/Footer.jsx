import './Footer.scss'

const Footer = () => 
{
  return (
    <>
      <div className="container">
        <footer className="footer">
          <div className="row">
            <div className="col-4">
              <div className="footer__left">
                <h3>Footer Left</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="footer__middle">
                <h3>Footer Middle</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="footer__right">
                <h3>Footer Right</h3>
            </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer