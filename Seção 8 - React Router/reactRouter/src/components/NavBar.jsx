// 2 - Links com react router
import './NavBar.css';

import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
      <NavLink to="/" 
      // className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}
      >Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default NavBar;