import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';


// import Navbar from 'react-bootstrap/Navbar';
// this way should be faster but not working 

// or less ideally - depends on how many imports you have per .jsx
import { Nav, NavDropdown } from 'react-bootstrap';

const NavBar = (props) => {
  const handleSelect = (eventKey) => console.log(`selected ${eventKey}`);

  const noUserLoggedInNav = (
    <Nav activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" title="Home" href="/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} eventKey="2" title="CryptoCurrencies" to="/coins">
          CryptoCurrencies
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="Watchlist" href="/watchlist">
          Watchlist
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" title="Coming Soon" disabled>
          Swap (Coming Soon)
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="6" title="Sign-Up" href="/signup">
          Sign-Up
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="7" title="LogIn" href="/login">
          LogIn
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )

  const userLoggedInNav = (
    <Nav activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" title="Home" href="/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="CryptoCurrencies" href="/coins">
          CryptoCurrencies
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="Watchlist" href="/watchlist">
          Watchlist
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4" disabled>
          Swap (Coming Soon)
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title={`Hello, {props.user.name}!`} id="nav-dropdown">
        <NavDropdown.Item eventKey="5.1">Change Password</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="5.2" onClick={() => {
          props.handleLogout()
        }}>Log Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
  return (
    <div className='NavBar'>
      {props.user ? userLoggedInNav : noUserLoggedInNav}
    </div>
  )
};
  
export default NavBar;