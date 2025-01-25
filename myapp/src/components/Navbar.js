import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for routing

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Navbar Brand with Link to Home */}
        <Navbar.Brand as={Link} to="/">Leave Management</Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        {/* Navbar Collapse Section */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Navigation Links with Link components */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* Dropdown Menu for Leave Period */}
            <NavDropdown title="Leave Period" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/leave-period/master">Master</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leave-period/transaction">Transaction</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leave-period/report">Report</NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown Menu for Leave Type */}
            <NavDropdown title="Leave Type" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/leave-type/master">Master</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leave-type/transaction">Transaction</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leave-type/report">Report</NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown Menu for Leave Configuration */}
            <NavDropdown title="Leave Configuration" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/leave-config/master">Master</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leave-config/transaction">Transaction</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/leave-config/report">Report</NavDropdown.Item>
            </NavDropdown>

            {/* Logout Link */}
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
