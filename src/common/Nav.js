import logo from './logo.png';

const NavBar = () => (
  <nav className="navBar">
    <div className="leftContainer">
      <div className="imgContainer">
        <img src={logo} alt="logo" width="50" height="50" />
      </div>
      <div className="titleContainer">
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
    </div>
    <div className="rightContainer">
      <ul className="links">
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
