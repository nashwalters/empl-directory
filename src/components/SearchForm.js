import React from "react"

const SearchForm = ({search}) => {
    return (
        <div className="searchbar text-center input-group">
            <input 
                type="text" 
                className="form-control" 
                name="search" 
                placeholder="Search Employee" 
                onChange={search}
            />
        </div> 
    );
}
 
export default SearchForm;