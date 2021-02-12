import React from 'react';
import '../ressources/searchInput.css';

const SearchInput = ({onSearchInput}) => {
    return (
        <div className='pa3'>
            <input 
                className='gr pa2 ba b--lightest-green bg-washed-blue black-70 '
                type='search' 
                placeholder='Entrez le nom que vous rechercher'
                onChange={onSearchInput}            
            ></input>
        </div>
    )
}

export default SearchInput;