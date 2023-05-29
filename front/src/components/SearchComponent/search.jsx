
const SearchBox = ({formValues}) => {
    return (  
        <label htmlFor="search" className="home-label" >
        <p className="search-title">Input field</p>
        <div>
            <input className="search-input" name="search" value={formValues}/>
            <input className="search-btn" type="submit" value='Search' />
        </div>
    </label>
    );
}
 
export default SearchBox;
