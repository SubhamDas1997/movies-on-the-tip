interface INavSearch {
    searchVal?: string,
    setSearchVal: (searchVal: any) => void
  }

const SearchBar = ({searchVal, setSearchVal}: INavSearch) => {
    return ( 
        <div className="searchBar">
            <input type="text" value={searchVal} placeholder="Search movie title" style={{marginRight: "15px", padding: "6px 15px", borderRadius: "7px"}} onChange={(e) => setSearchVal(e.target.value)}/>
        </div>
     );
}
 
export default SearchBar;
