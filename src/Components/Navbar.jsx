import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => 
{
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="/assets/logo.png" alt="" />
        </div>
        <div className="navbar__list">
          <Link to='/' className="navbar__link">Home</Link>
          <Link to='/services' className="navbar__link">Services</Link>
          <Link to='/doctors' className="navbar__link">Doctors</Link>
          <Link to='/appointments' className="navbar__link">Appointments</Link>
          <a href="#" className="navbar__link">Sign in/Sign up</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar