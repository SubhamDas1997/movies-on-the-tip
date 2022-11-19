import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import Search from "./Search";
import { useEffect, useState } from "react";
import '../Navbar/Navbar.css'

interface INavSearch {
  searchVal?: string,
  setSearchVal: (searchVal: string) => void,
  disableSearch: boolean
}

const NavMenu = ({searchVal, setSearchVal, disableSearch}: INavSearch) => {
  const [searchOpen, setSearchOpen] = useState<string>('none');
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [ExtraSearchOpen, setExtraSearchOpen] = useState<string>(screenWidth <= 1100 ? 'flex' : 'none');
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  
  const handleSeachBtn = () => {
    if(searchOpen === 'none') setSearchOpen('flex');
    else setSearchOpen('none');
  }

  const handleHamburgerClick = () => {
    if (screenWidth >= 1100) return setIsNavExpanded(false);
    if (isNavExpanded === false) setIsNavExpanded(true);
    else setIsNavExpanded(false);
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setExtraSearchOpen(screenWidth <= 1100 ? 'flex' : 'none');
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  
  return ( 
    <Navbar collapseOnSelect expand="xl" fixed="top" bg="dark" variant="dark" expanded={isNavExpanded}>
      <Container className="nav-container">
        <Navbar.Brand className="nav-logo" to="/home" as={NavLink} style={{color: '#FFC107'}}>
          <FontAwesomeIcon icon={faFilm} style={{marginRight: '5px'}}/> 
          MOTT
        </Navbar.Brand>

        <div className="extra-search">
          <Search searchVisible={ExtraSearchOpen} searchVal={searchVal} setSearchVal={setSearchVal} disableSearch={disableSearch} />
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleHamburgerClick} />

        <Navbar.Collapse id="responsive-navbar-nav" className="no-transition">
          <Nav className="me-auto nav-items" onClick={handleHamburgerClick}>
            <Nav.Link to="/movies-in-theaters" as={NavLink}>Movies in theaters</Nav.Link>
            <Nav.Link to="/movies-coming" as={NavLink}>Coming soon</Nav.Link>
            <Nav.Link to="/top-rated-india" as={NavLink}>Top rated Indian</Nav.Link>
            <Nav.Link to="/top-rated-movies" as={NavLink}>Top rated movies</Nav.Link>
            <Nav.Link to="/favourite" as={NavLink} className="menu-fav" >Favourties</Nav.Link>
          </Nav>
          
          <Nav className="nav-end">
            <div className="search-field">
              <Search searchVisible={searchOpen} searchVal={searchVal} setSearchVal={setSearchVal} disableSearch={disableSearch} />
            </div>
            
            <Button className="search-btn" variant="outline-info" style={{margin: "8px 5px 8px 0"}} onClick={handleSeachBtn}>       
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>

            <Nav.Link to="/favourite" as={NavLink} className="btn-fav">          
              <Button variant="outline-warning">       
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
 
export default NavMenu;
