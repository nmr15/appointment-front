import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => 
{
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="https://placehold.co/180x60" alt="" />
        </div>
        <div className="navbar__list">
          <Link to='/' className="navbar__link">Home</Link>
          <Link to='/services' className="navbar__link">Services</Link>
          <Link to='/doctors' className="navbar__link">Doctors</Link>
          <a href="#" className="navbar__link">Appointments</a>
          <a href="#" className="navbar__link">Sign in/Sign up</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar