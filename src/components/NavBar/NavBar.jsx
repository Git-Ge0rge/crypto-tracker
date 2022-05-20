import React from 'react'
import './NavBar.css'
// import Navbar from 'react-bootstrap/Navbar';
// this way should be faster but not working 

// or less ideally - depends on how many imports you have per .jsx
import { Nav, NavDropdown } from 'react-bootstrap';

const NavBar = (props) => {
  const handleSelect = (eventKey) => console.log(`selected ${eventKey}`);

  return (
    <Nav activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="/coins">
          CryptoCurrencies
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          Portfolio
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          Swap (Coming Soon)
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Account" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Log Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
};
  
export default NavBar;