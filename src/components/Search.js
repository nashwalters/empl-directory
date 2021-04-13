import React from "react"

const Search = (props) => {
    
    return (
        <div>
            <input type="text" className="form-control" name="search" placeholder="Search Employee" onChange={props}/>
        </div>
        
     );
}
 
export default Search;