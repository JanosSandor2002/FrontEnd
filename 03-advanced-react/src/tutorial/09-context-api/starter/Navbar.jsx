import React, { useState, createContext } from 'react';
import UserContainer from './UserContainer';
import { useContext } from 'react';

export const NavbarContext = createContext();
//console.log(NavbarContext);

//custom hook
export const useAppContext = () => useContext(NavbarContext);
const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;

const NavLinks = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};
