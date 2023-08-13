import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import styles from './styles.css';
import CartWidget from '../CartWidget/CartWidget';
// import CartItem from '../Cart/CartItem';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

const NavBar = () => {
    return (
        <>
        {
            [false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                <Container fluid>
                <NavLink className='navLink' to='/'>Paw's Home</NavLink>
                <NavLink className='navLink navLinkBlack' to='/cart'><CartWidget className='cartWidgetMainNavBar'/></NavLink>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <NavLink className='navLink navLinkBlack' to='/'>Paw's Home</NavLink>
                            <NavLink className='navLink navLinkBlack' to='/cart'><CartWidget/></NavLink>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavLink className='navLink' to='/'>Home</NavLink>
                        <NavLink className='navLink' to='/categorie/Pets'>Pets</NavLink>
                        <NavLink className='navLink' to='/categorie/Dogs'>Dogs</NavLink>
                        <NavLink className='navLink' to='/categorie/Cats'>Cats</NavLink>
                        <NavLink className='navLink' to='/categorie/Cats'></NavLink>
                        {/* <NavLink className='navLink' to='/'><CartItem/></NavLink> */}
                        {   
                            /* <NavDropdown
                            title="Accesories"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                            <NavDropdown.Item href="#action3"> Paws </NavDropdown.Item>
                            <NavDropdown.Item href="#action4"> Wings </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                About ours divitions
                            </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>)   
                )
            }
        </>
    );
}

export default NavBar;