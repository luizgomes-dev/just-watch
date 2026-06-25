import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
          <Link to='/'><span className="headerTitle">Just Watch</span></Link>
          <Link to='/favorites'><button className="headerButton">My movies</button></Link>
      </header>
    </>
  );
}

export default Header;