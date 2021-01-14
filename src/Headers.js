import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ModalFocusAfterClose from './Modal/index';

const Headers = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="primary" dark expand='md'>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            </NavItem>
            <NavItem>
              {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
        <NavLink >  <ModalFocusAfterClose  /></NavLink>

      </Navbar>
    </div>
  );
}

export default Headers;