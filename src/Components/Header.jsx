import './Header.scss'

const Header = () => 
{
  return (
    <>
      <header className="header">
        <div className="header__contact">
          <div className="row">
            <div>
              <img src="https://placehold.co/16x16" alt="phone number" />
              <p>(800)-123-4567</p>
            </div>
            <div>
              <img src="https://placehold.co/16x16" alt="address" />
              <p>1111 Fake St, Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header