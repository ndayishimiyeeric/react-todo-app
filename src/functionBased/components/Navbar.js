import React from 'react';

import { Link } from 'react-router-dom';

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

/* eslint-disable quotes */

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ];

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>
        {
          navbarOpen
            ? <MdClose style={{ color: '#344563', width: '40px', height: '40px' }} />
            : <FiMenu style={{ color: '#7f8cff', width: '40px', height: '40px' }} />
        }
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {links.map((link) => { //eslint-disable-line
          return (
            <li key={link.id}>
              <Link
                to={link.path}
                activeClassName="active-link"
                onClick={() => closeMenu()}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
