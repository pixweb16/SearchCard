import React from 'react';

const SearchInput = ({onSearchInput}) => {
    return (
        <div className='pa3'>
            <input 
                className='pa2 ba b--lightest-green bg-washed-blue black-70 '
                type='search' 
                placeholder='Enter the name to search'
                onChange={onSearchInput}            
            ></input>
        </div>
    )
}

export default SearchInput;