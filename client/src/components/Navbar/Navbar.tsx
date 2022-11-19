import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilm, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import Search from "./Search";
import { useState } from "react";
import '../Navbar/Navbar.css'

interface INavSearch {
  searchVal?: string,
  setSearchVal: (searchVal: string) => void,
  disableSearch: boolean
}

const NavMenu = ({searchVal, setSearchVal, disableSearch}: INavSearch) => {
  const [searchOpen, setSearchOpen] = useState<string>('none');
  
  const handleSeachBtn = () => {
    if(searchOpen === 'none') setSearchOpen('flex');
    else setSearchOpen('none');
  }
  
  return ( 
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container className="navbar-container">
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

        <Nav className="navbar-end">
          <div className="search-field">
            <Search searchVisible={searchOpen} searchVal={searchVal} setSearchVal={setSearchVal} disableSearch={disableSearch} />
          </div>
          
          <Button className="search-btn" variant="outline-info" style={{margin: "8px 5px 8px 0"}} onClick={handleSeachBtn}>       
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>

          <Nav.Link to="/favourite" as={NavLink}>          
            <Button variant="outline-warning">       
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
}
 
export default NavMenu;
