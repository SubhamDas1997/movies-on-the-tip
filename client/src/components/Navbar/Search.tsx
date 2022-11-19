import '../Navbar/Navbar.css'

interface INavSearch {
    searchVisible: string,
    searchVal?: string,
    setSearchVal: (searchVal: any) => void,
    disableSearch: boolean
  }

const SearchBar = ({searchVisible, searchVal, setSearchVal, disableSearch}: INavSearch) => {
    return (
        <input className="search-bar" type="text" value={searchVal} placeholder="Search movie title" style={{display: `${searchVisible}`}} onChange={(e) => setSearchVal(e.target.value)} disabled={disableSearch}/>
     );
}
 
export default SearchBar;
