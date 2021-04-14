import React from 'react';
import './SearchForm.css';

const SearchForm = ({search}) => {
    return (
        <form className=" text-center input-group">
            <label className="form-label"> Search: </label>
            <input 
                type="text" 
                className="form-control" 
                name="search" 
                placeholder="Enter Employee Name" 
                onChange={search}
            />

        </form>         
    );
}
 
export default SearchForm;