import React from 'react';
import Card from './Card';

const CardList = ({profils, clicked}) => {

    return profils.map( (user, i) => <Card 	key={user.id}
    										i={user.id}
    										id={i}
    										name={user.name} 
    										email={user.email} 
    										clicked={clicked} 
    								/>);
}

export default CardList;