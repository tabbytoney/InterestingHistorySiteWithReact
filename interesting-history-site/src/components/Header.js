import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  // The state is for when the screen is small and the nav is a hamburger
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className='bg-dark' sticky='top' expand='md'>
      <NavbarBrand className='ms-5' href='/'>
        <img
          src='https://i.etsystatic.com/8213963/r/il/5184cb/3308219890/il_794xN.3308219890_htgh.jpg'
          alt='placeholder'
          className='float-start'
        />
        <h1 className='mt-1 text-info'>Weird But True History</h1>
      </NavbarBrand>

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className='ms-auto ' navbar>
          <NavItem>
            <NavLink className='nav-link text-info' to='/'>
              <i className='fa fa-home fa-lg' /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link text-info' to='/guess'>
              <i className='fa fa-question fa-lg' /> Guess the History
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link text-info' to='/aboutcontact'>
              <i className='fa fa-pencil fa-lg' /> About/Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
