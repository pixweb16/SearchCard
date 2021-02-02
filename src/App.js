import React, {Component} from 'react';
import CardList from './components/CardList';
import {profils} from './ressources/profils';
import SearchInput from './components/SearchInput';

class App extends Component  {
    
    state = {
            profils: profils,
            searchField: ''
    };

    onSearchInput = (event) => this.setState({ searchField: event.target.value });     

    render() {
        const filterProfils = this.state.profils.filter(x => {
            return x.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        } )
        
        return (
            <div className='tc'>
                <h2>Profils List</h2>
                <SearchInput onSearchInput={this.onSearchInput} />
                <CardList profils={filterProfils} />
            </div>
        )
        

    };
}

export default App;