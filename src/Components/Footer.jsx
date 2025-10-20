import './Footer.scss'
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const contact = [
  {id: "1", icon: <FaLocationDot />, info: "1111 Fake St, Los Angeles, CA"},
  {id: "2", icon: <FaPhone />, info: "(800)-123-4567"},
  {id: "3", icon: <FaEnvelope />, info: "info@fakeemail.net"}
  ]

const Footer = () => 
{
  return (
    <>
      <div className="container">
        <footer className="footer">
          <div className="row">
            <div className="col-4">
              <div className="footer__email">
                <h3>Email</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="footer__blog">
                <h3>Blog Post</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="footer__contact">
                <h3>Contact</h3>
                <ul className="footer__contact-list">
                  {contact.map((contact) => (
                    <li className="footer__contact-item" key={contact.id}>
                      <span>{contact.icon}</span>
                      <p>{contact.info}</p>
                    </li>
                  ))}
                </ul>
            </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer