import logo from './logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      key: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      key: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      key: 3,
      path: '/profile',
      text: 'My Profile',
    },
  ];

  const createLinks = () =>
    links.map((link) => (
      <li key={link.key}>
        <NavLink to={link.path} exact>
          {link.text}
        </NavLink>
      </li>
    ));

  return (
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
        <ul className="links">{createLinks()}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
