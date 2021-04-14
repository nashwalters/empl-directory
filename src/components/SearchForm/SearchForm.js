import React from 'react';
import './SearchForm.css';

const SearchForm = ({search}) => {
    return (
        <div className=" text-center input-group">
            <label className="form-label"> Search: </label>
            <input 
                type="text" 
                className="form-control" 
                name="search" 
                placeholder="Enter Employee Name" 
                onChange={search}
            />
        </div> 
    );
}
 
export default SearchForm;