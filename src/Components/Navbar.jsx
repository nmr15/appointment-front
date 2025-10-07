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
          <a href="#" className="navbar__link">Home</a>
          <a href="#" className="navbar__link">Services</a>
          <a href="#" className="navbar__link">Doctors</a>
          <a href="#" className="navbar__link">Appointments</a>
          <a href="#" className="navbar__link">Sign in/Sign up</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar