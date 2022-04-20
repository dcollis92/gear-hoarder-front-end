// import { NavLink } from 'react-router-dom'
import './NavBar.scss';
import { Nav, Navbar, Container, Offcanvas }  from 'react-bootstrap';
import Logo from "../../assets/logos/Gear-Hoarder.svg"


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    {user ?
      <Navbar bg="lavender" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img alt="" src={Logo}
            height="70px"
            className="d-inline-block align-top"/>
            {' '}</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas bg='lavender' className='mx-auto'
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><img alt="" 
              src={Logo}height='100px'/></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-2">
                <Nav.Link href="/rigs">
                  <i className="fas fa-circle-right"></i>
                  {' '}All Rigs</Nav.Link>
                <Nav.Link href="/amps">
                  <i className="fas fa-circle-right"></i>
                  {' '}All Amps</Nav.Link>
                <Nav.Link href="/guitars">
                  <i className="fas fa-circle-right"></i>
                  {' '}All Guitars</Nav.Link>
                <Nav.Link href="/pedals">
                  <i className="fas fa-circle-right"></i>
                  {' '}All Pedals</Nav.Link>
                <Nav.Link href="/rigs/new">
                  <i className="fas fa-circle-plus"></i>
                  {' '}Add Rig</Nav.Link>  
                <Nav.Link href="/amps/new">
                  <i className="fas fa-circle-plus"></i>
                  {' '}Add Amp</Nav.Link>
                <Nav.Link href="/guitars/new">
                  <i className="fas fa-circle-plus"></i>
                  {' '}Add Guitar</Nav.Link>
                <Nav.Link href="/pedals/new">
                  <i className="fas fa-circle-plus"></i>
                  {' '}Add Pedal</Nav.Link>
                <Nav.Link href="" onClick={handleLogout}>
                  <i className="fas fa-right-from-bracket"></i>
                  {' '}Log Out</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      :
      <Navbar bg="lavender" expand={false}>
        <Container fluid>
        <Navbar.Brand href="/">
          <img alt="" src={Logo}
            height="70px"
            className="d-inline-block align-top"/>
            {' '}</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas bg='lavender' className='mx-auto'
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><img alt="" 
              src={Logo}height='100px'/></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-2">
                  <Nav.Link href="/rigs">
                  <i className="fas fa-circle-right"></i>
                  {' '}Rigs</Nav.Link>
                <Nav.Link href="/amps">
                  <i className="fas fa-circle-right"></i>
                  {' '}Amps</Nav.Link>
                <Nav.Link href="/guitars">
                  <i className="fas fa-circle-right"></i>
                  {' '}Guitars</Nav.Link>
                <Nav.Link href="/pedals">
                  <i className="fas fa-circle-right"></i>
                  {' '}Pedals</Nav.Link>
                  <Nav.Link href="/login">
                  <i className="fas fa-key"></i>
                  {' '}Log In</Nav.Link>
                <Nav.Link href="/signup">
                  <i className="fas fa-user-plus"></i>
                  {' '}Sign Up</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    }
  </>
  )
}

export default NavBar
