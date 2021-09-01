import { NavLink } from 'react-router-dom';
import logo from './logo.png';

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

  const createLinks = () => links.map((link) => (
    <li className="ml-4 text-blue-600 hover:underline" key={link.key}>
      <NavLink activeClassName="underline" to={link.path} exact>
        {link.text}
      </NavLink>
    </li>
  ));

  return (
    <nav className="navBar flex justify-between py-4 border-b-2 mb-8">
      <div className="leftContainer flex items-center">
        <div className="imgContainer mr-4">
          <img src={logo} alt="logo" width="50" height="50" />
        </div>
        <div className="titleContainer">
          <h1 className="text-2xl font-bold">Space Traveler&apos;s Hub</h1>
        </div>
      </div>
      <div className="rightContainer flex items-center">
        <ul className="links my-auto flex">{createLinks()}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
