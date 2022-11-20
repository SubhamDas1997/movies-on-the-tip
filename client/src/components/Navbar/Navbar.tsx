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
  const movieType = window.location.pathname;

  const [searchOpen, setSearchOpen] = useState<string>('none');
  const [isFavBtnActive, setIsFavBtnActive] = useState<string>(movieType === "/favourite" ? 'active' : '');
  const [isSearchBtnActive, setIsSearchBtnActive] = useState<string>('search-btn');
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [ExtraSearchOpen, setExtraSearchOpen] = useState<string>(screenWidth <= 1200 ? 'flex' : 'none');
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  
  const handleSeachBtnClick = () => {
    if (searchOpen === 'none') {
      setSearchOpen('flex');
      setIsSearchBtnActive('search-btn active');
    } else {
      setIsSearchBtnActive('search-btn');
      setSearchOpen('none');
    }
  }

  const handleFavBtnClick = () => {
    if (isFavBtnActive === '') return setIsFavBtnActive('active');
  }

  const favBtnInactive = () => {
    if (isFavBtnActive === 'active') return setIsFavBtnActive('');
  }

  const handleHamburgerClick = () => {
    if (screenWidth >= 1200 ) return setIsNavExpanded(false);
    if (isNavExpanded === false) return setIsNavExpanded(true);
    
    setIsNavExpanded(false);
  }

  const handleBrandLogoClick = () => {
    favBtnInactive();
    handleHamburgerClick();
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setExtraSearchOpen(screenWidth <= 1200 ? 'flex' : 'none');
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  
  return ( 
    <Navbar collapseOnSelect expand="xl" fixed="top" bg="dark" variant="dark" expanded={isNavExpanded}>
      <Container className="nav-container">
        <Navbar.Brand className="nav-logo" to="/home" as={NavLink} style={{color: '#FFC107'}} onClick={handleBrandLogoClick}>
          <FontAwesomeIcon icon={faFilm} style={{marginRight: '5px'}}/> 
          MOTT
        </Navbar.Brand>

        <div className="extra-search">
          <Search searchVisible={ExtraSearchOpen} searchVal={searchVal} setSearchVal={setSearchVal} disableSearch={disableSearch} />
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleHamburgerClick} />

        <Navbar.Collapse id="responsive-navbar-nav" className="no-transition">
          <Nav className="me-auto nav-items" onClick={handleHamburgerClick}>
            <Nav.Link to="/movies-in-theaters" as={NavLink} onClick={favBtnInactive}>Movies in theaters</Nav.Link>
            <Nav.Link to="/movies-coming" as={NavLink} onClick={favBtnInactive}>Coming soon</Nav.Link>
            <Nav.Link to="/top-rated-india" as={NavLink} onClick={favBtnInactive}>Top rated Indian</Nav.Link>
            <Nav.Link to="/top-rated-movies" as={NavLink} onClick={favBtnInactive}>Top rated movies</Nav.Link>
            <Nav.Link to="/favourite" as={NavLink} className="menu-fav" >Favourties</Nav.Link>
          </Nav>
          
          <Nav className="nav-end">
            <div className="search-field">
              <Search searchVisible={searchOpen} searchVal={searchVal} setSearchVal={setSearchVal} disableSearch={disableSearch} />
            </div>
            
            <Button className={isSearchBtnActive} variant="outline-info" style={{margin: "8px 5px 8px 0"}} onClick={handleSeachBtnClick}>       
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>

            <Nav.Link to="/favourite" as={NavLink} className="fav-btn-div">          
              <Button variant="outline-warning" className={isFavBtnActive} onClick={handleFavBtnClick}>       
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
