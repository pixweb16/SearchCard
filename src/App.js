import React, {Component} from 'react';
import CardList from './components/CardList';
import BtnShow from './components/BtnShow';
import {profils} from './ressources/profils';
import SearchInput from './components/SearchInput';
import BtnMore from './components/BtnMore';

class App extends Component  {
    
    state = {
            profils: profils,
            searchField: '',
            isClicked: false,
            count: 4,
            btnShowText: 'Afficher les profils',
            btnMoreText: 'Afficher plus'
    };
    

    
    onSearchInput = (event) => this.setState({ searchField: event.target.value });     

    show = () => {
        this.setState( { isClicked: !this.state.isClicked,
                         btnShowText: !this.state.isClicked ? 'Cacher les profils' : 'Afficher les profils'
                     });
    }



    showMore = () => {
        let newCount = this.state.count + 3;
        this.setState({count : newCount});
        
        if ( this.state.count >= this.state.profils.length ) { 
            this.setState({btnMoreText: 'Tous les profils sont Afficher'}); 
        }
    }

    delHandler = (id) => {
        console.log("del>>"+id);
        let newProfils = this.state.profils;
        newProfils.splice(id, 1);
        console.log(newProfils);
        this.setState({profils : newProfils});
    }

    render() {

        const filterProfils = this.state.profils.slice(0, this.state.count).filter(x => {
            return x.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        let showCardList = null;
        if (this.state.isClicked) {
            showCardList =  (<div>
                                <CardList profils={filterProfils} clicked={this.delHandler} />
                                <BtnMore clicked={this.showMore} btnMoreText={this.state.btnMoreText}/>
                            </div>) ;
        }
        
        return (
            <div className='tc'>
                <h2>Profils List</h2>
                <BtnShow show={this.show} btnShowText={this.state.btnShowText} />
                <SearchInput onSearchInput={this.onSearchInput}/>
                { showCardList }                
            </div>
        )    
    };
}

export default App;