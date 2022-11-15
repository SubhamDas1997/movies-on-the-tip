import { Navbar, Nav, Button, Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilm, faHeart} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
    return ( 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/home" as={NavLink} style={{color: '#FFC107'}}>
            <FontAwesomeIcon icon={faFilm} style={{marginRight: '5px'}}/> 
            MOTT
          </Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link to="/movies-in-theaters" as={NavLink}>Movies in theaters</Nav.Link>
            <Nav.Link to="/movies-coming" as={NavLink}>Coming soon</Nav.Link>
            <Nav.Link to="/top-rated-india" as={NavLink}>Top rated Indian</Nav.Link>
            <Nav.Link to="/top-rated-movies" as={NavLink}>Top rated movies</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search movie title"
              className="me-2"
              aria-label="Search"
            />
            <Nav.Link to="/favourite" as={NavLink}>          
              <Button variant="outline-warning">       
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            </Nav.Link>
          </Form>
        </Container>
      </Navbar>
     );
}
 
export default NavMenu;
